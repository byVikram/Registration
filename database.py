from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import json

db = mysql.connector.connect(
    host='localhost',
    user='vikram',  # Replace with your MySQL username
    password='vikram',  # Replace with your MySQL password
    database='myloginapp',  # Replace with the name of the MySQL database you created
)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Invalid data'}), 400


    cursor = db.cursor()
    cursor.execute('SELECT * FROM users WHERE email = %s ', (email,))
    status = cursor.fetchone()
    if status:
        if status[1]==password:
            return jsonify({'message': 'user exist'}), 200
        else:
            return jsonify({'message': 'wrong password'}), 200

    else :
        try:
            cursor.execute('INSERT INTO users (email, password) VALUES (%s, %s)', (email, password))
            db.commit()
            return jsonify({'message': 'User registered successfully'}), 200
        except Exception as e:
            db.rollback()
            return jsonify({'message': 'Failed to register user'}), 500








if __name__ == '__main__':
    app.run(debug=True)