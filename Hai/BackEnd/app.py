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


@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')  # Retrieve the search query from the request query parameters

    # Perform the search in the MongoDB database
    results = collection_cards.find({'location': {'$regex': query, '$options': 'i'}})

    # Format the search results as a list of dictionaries
    search_results = []
    for document in results:
        card = {
            "title": document['title'],
            "description": document['description'],
            "image": document['image'],
            "username": document['username'],
            "location": document['location']
        }
        search_results.append(card)

    return jsonify(search_results)  # Return the search results directly as an array

if __name__ == '__main__':
    app.run()
