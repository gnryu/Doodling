import pyrebase
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

@app.route('/', methods=['POST', 'GET'])
def main():
    return 'hello world'

@app.route('/user/login', methods=['POST', 'GET', 'OPTIONS'])
def login():
    if request.method == 'POST':
        # json_data = {
        #     'userName': "gina",
        #     'userEmail': "gnnryu@gmail.com"
        # }
        json_data = request.get_json()

        email = json_data['userEmail']
        name = json_data['userName']

        users = db.child('users').get()
        if users.val() == None:
            db.child('users').push(json_data)
            response = {
                "isin": False,
                "result": {
                    "userName": name,
                    "userEmail": email
                }
            }
        else:
            user_list = list((users.val()).values())
            email_list = list()
            for i in user_list:
                email_list.append(i['userEmail'])

            if email in email_list:
                # DB에 있는 userEmail에 맞는 userName을 다시 뽑아야 해
                idx = email_list.index(email)
                name = (user_list[idx])['userName']

                response = {
                "isin": True,
                "result": {
                    "userName": name,
                    "userEmail": email
                }
            }
            else:
                db.child('users').push(json_data)
                user_list.append(email)
                response = {
                    "isin": False,
                    "result": {
                        "userName": name,
                        "userEmail": email
                    }
                }
        # return response
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp


if __name__ == '__main__':
    app.run(debug=True, port=8080)