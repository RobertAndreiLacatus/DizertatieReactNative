import pymongo
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://newR:123@cluster0.qn2heje.mongodb.net/?retryWrites=true&w=majority")
db = cluster["Thesis"]
collection = db["Register"]