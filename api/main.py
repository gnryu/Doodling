from pyrebase import pyrebase
from flask import *
from flask_cors import CORS

config = {
    "apiKey": "AIzaSyBQ_B4biZ838nqImon-EGXJMPqQCh4saYA",
    "authDomain": "web-t-9f384.firebaseapp.com",
    "projectId": "web-t-9f384",
    "storageBucket": "web-t-9f384.appspot.com",
    "messagingSenderId": "117262330412",
    "appId": "1:117262330412:web:77da11eb1edd07c5357f89",
    "measurementId": "G-YC2PQ4YBYD",
    "databaseURL": "https://web-t-9f384-default-rtdb.firebaseio.com"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST', 'GET', 'OPTIONS'])
def main():
    # if request.method == 'POST':
    #     name = request.form['name']
    #     users = db.child('users').get()
    #     user_list = list((users.val()).values())
    #     # return user_list

    #     # if name is in DB
    #     if name in user_list:
    #         data = {
    #             "isin": True,
    #             "result": {
    #                 "userName": name
    #             }
    #         }
    #     else:
    #         db.child('users').push(name)
    #         data = {
    #             "isin": False,
    #             "result": {
    #                 "userName": name
    #             }
    #         }
    #     return jsonify(data)

    # POST: request body 
    if request.method == 'POST':
        data = request.get_json()
        print(data)

    data = { "isin": False }
    resp = jsonify(data)

    resp.headers.add('Access-Control-Allow-Credentials', 'true')
    resp.headers.add('Content-Type', 'application/json')

    return resp

if __name__ == '__main__':
    app.run(debug=True,port=8080)