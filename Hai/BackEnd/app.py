from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/login', methods=['GET','POST'])
def login():
    data = request.get_json()
    user = data['user']
    password = data['password']

    if user == 'Robert' and password == '123':
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Invalid credentials'})

if __name__ == '__main__':
    app.run()