from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
from pymongo import MongoClient


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

cluster = MongoClient("mongodb+srv://newR:123@cluster0.qn2heje.mongodb.net/?retryWrites=true&w=majority")
db = cluster["Thesis"]
collection = db["Register"]
collection_cards = db["Cards"]
collection_cardInfo=db["CardInfo"]
collection_infoBlog=db["InfoBlog"]

@app.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'HOME'})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    selectedOption=data['selectedOption']
    
    registered_accountHost = collection.find_one({"username": username, "password": password, "selectedOption": "Host"})
    registered_accountGuest = collection.find_one({"username": username, "password": password, "selectedOption": "Guest"})

    if registered_accountGuest:
        return jsonify({'message': 'Login successful for Guest'})
    elif registered_accountHost:
        return jsonify({'message': 'Login successful for Host'})
    else:
        return jsonify({'message': 'Invalid credentials'}), 404
    
    

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']
    email = data['email']
    phone = data['phone']
    selectedOption=data['selectedOption']

    # Insert the user data into the database
    accountUser = {
        "username": username,
        "password": password,
        "email": email,
        "phone": phone,
        "selectedOption":selectedOption
    }
    print(accountUser)

    if username and password and email and phone and selectedOption:
        collection.insert_one(accountUser)
        return jsonify({'message': 'Registration successful'})
    else:
        return jsonify({'message': 'Registration failed'})
    
@app.route('/add_card', methods=['POST'])
def addCard():
    data = request.get_json()
    title = data['title']
    description = data['description']
    image = data['image']
    username=data['username']
    location=data['location']

    card = {
        "title": title,
        "description": description,
        "image": image,
        "username":username,
        "location":location
    }

    try:
        collection_cards.insert_one(card)
        return jsonify({'message': 'Card successfully added'})
    except:
        return jsonify({'message': 'Card failed to add'})
    
@app.route('/get_cards', methods=['GET'])
def getCards():
    cursor = collection_cards.find({})
    cards_list = []
    for document in cursor:
        card = {
            "title": document['title'],
            "description": document['description'],
            "image": document['image'],
            "username":document['username'],
            "location":document['location']
        }
        cards_list.append(card)
    return jsonify(cards=cards_list)    


@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data['searchQuery'] # Retrieve the search query from the request query parameters
    
    # Perform the search in the MongoDB database
    results = collection_cards.find({'location': {'$regex': query, '$options': 'i'}})
    print('the cardf was found')
    # Format the search results as a list of dictionaries
    search_results = []
    for document in results:
        print('card'+document['title'])
        card = {
            "title": document['title'],
            "description": document['description'],
            "image": document['image'],
            "username": document['username'],
            "location": document['location']
        }
        search_results.append(card)

    return jsonify(search_results)  # Return the search results directly as an array


@app.route('/templateUser', methods=['POST'])
def addInfo():
    data = request.get_json()
    title = data['title']
    description = data['description']
    image = data['image']
    inboxText=data['inboxText']
    inboxText1=data['inboxText1']
    inboxText2=data['inboxText2']
    detailsText=data['detailsText']
    detailsText1=data['detailsText1']
    detailsText2=data['detailsText2']
    detailsText3=data['detailsText3']
    descriptionB=data['descriptionB']
    originLatitude=data['originLatitude']
    originLongitude=data['originLongitude']
    geocodedCoordinates=data['geocodedCoordinates']
    geocodedCoordinates1=data['geocodedCoordinates1']
    geocodedCoordinates2=data['geocodedCoordinates2']

    infoPage = {
        "title": title,
        "description": description,
        "image": image,
        "inboxText":inboxText,
        "inboxText1":inboxText1,
        "inboxText2":inboxText2,
        "detailsText":detailsText,
        "detailsText1":detailsText1,
        "detailsText2":detailsText2,
        "detailsText3":detailsText3,
        "descriptionB":descriptionB,
        "originLatitude":originLatitude,
        "originLongitude":originLongitude,
        "geocodedCoordinates":geocodedCoordinates,
        "geocodedCoordinates1":geocodedCoordinates1,
        "geocodedCoordinates2":geocodedCoordinates2,
        
    }

    try:
        collection_cardInfo.insert_one(infoPage)
        return jsonify({'message': 'InfoPage successfully added'})
    except:
        return jsonify({'message': 'InfoPage failed to add'})
    
    
@app.route('/searchInfo', methods=['POST'])
def searchInfo():
    data = request.get_json()
    query = data['searchQuery']

    # Perform the search in the MongoDB database with the provided title query
    results = collection_cardInfo.find({'title': {'$regex': query, '$options': 'i'}})
    print('the data was found')
    
    # Format the search results as a list of dictionaries
    search_results = []
    for document in results:
        print(document['title'])
        cardInfoPage = {
            "title": document['title'],
            "description": document['description'],
            "image": document['image'],
            "inboxText": document['inboxText'],
            "inboxText1": document['inboxText1'],
            "inboxText2": document['inboxText2'],
            "detailsText": document['detailsText'],
            "detailsText1": document['detailsText1'],
            "detailsText2": document['detailsText2'],
            "detailsText3": document['detailsText3'],
            "descriptionB": document['descriptionB'],
            "originLatitude":document['originLatitude'],
            "originLongitude":document['originLongitude'],
            "geocodedCoordinates":document['geocodedCoordinates'],
            "geocodedCoordinates1":document['geocodedCoordinates1'],
            "geocodedCoordinates2":document['geocodedCoordinates2']
        }
        search_results.append(cardInfoPage)

    return jsonify(search_results)  # Return the search results directly as an array
 # Return the search results directly as an array  # Return the search results directly as an array    


@app.route('/infoBlog', methods=['POST'])
def infoBlog():
    data = request.get_json()
    title = data['title']
    description = data['description']
    imageSource = data['imageSource']

    # Insert the user data into the database
    blogInfo = {
        "title": title,
        "description": description,
        "imageSource": imageSource,
        
    }
    print(blogInfo)

    if title and description and imageSource:
        collection_infoBlog.insert_one(blogInfo)
        return jsonify({'message': 'Information was inserted succesfully'})
    else:
        return jsonify({'message': 'Please, try again'})

@app.route('/findBlog', methods=['POST'])
def findBlog():
    try:
        # Preluați toate documentele din colecția "collection_infoBlog"
        all_blogs = collection_infoBlog.find({})

        # Lista pentru a stoca informațiile dorite pentru fiecare blog
        blogs_list = []

        # Iterați prin fiecare document din colecție
        for blog in all_blogs:
            # Preluăm câmpurile dorite pentru fiecare document și le adăugăm în lista "blogs_list"
            blog_info = {
                "title": blog["title"],
                "description": blog["description"],
                "imageSource": blog["imageSource"]
            }
            blogs_list.append(blog_info)

        # Returnăm lista "blogs_list" către frontend ca un JSON array
        return jsonify(blogs_list), 200

    except Exception as e:
        # Gestionăm excepțiile, le logăm și returnăm un mesaj de eroare
        print('Eroare:', str(e))
        return jsonify({'message': 'Eroare de server'}), 500






if __name__ == '__main__':
    app.run()
