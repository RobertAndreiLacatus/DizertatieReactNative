from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pymongo
from pymongo import MongoClient

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

cluster = MongoClient("mongodb+srv://newR:123@cluster0.qn2heje.mongodb.net/?retryWrites=true&w=majority")
db = cluster["Thesis"]
collection = db["Register"]


@app.route('/', methods=['GET'])
@cross_origin()
def home():
    return jsonify({'message': 'HOME'})

@app.route('/login', methods=['GET','POST'])
@cross_origin()
def login():
    data = request.get_json()
    user = data['user']
    password = data['password']

    if user == 'Robert' and password == '123':
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid credentials'}), 404


@app.route('/register',methods=['POST'])
@cross_origin
def register():
    data=request.get_json()
    username=data['username']
    password=data['password']
    email=data['email']
    phone=data['phone']
    
  
    #Insert the user data into the database
    accountUser={
        "username":username,
        "password":password,
        "email":email,
        "phone":phone
        
    }
    
    collection.insert_one(accountUser)
    
    return jsonify({'message':'Registration successful'})

    


if __name__ == '__main__':
    app.run()