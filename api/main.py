import pyrebase
from flask import *

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

@app.route('/', methods=['POST', 'GET'])
def main():
    # return 'hello world'
    if request.method == 'POST':
        name = request.form['name']
        db.child('todo').push(name)
        todo = db.child('todo').get()
        todo_list = todo.val()
        return render_template('index.html', todo=todo_list.values())
    return render_template('index.html')


# @app.route('/user/login', methods=['POST', 'GET'])
# def login():
#     if request.method == 'POST':
#         name = request.form['name']
#         db.child('users').push(name)
#         users = db.child('users').get()
#         user_list = users.val()
#         print(type(user_list))
#         # return render_template('login.html', users=user_list)
#         data = {
#             "isSuccess": True,
#             "result": {
#                 "userName": user_list.popitem()[1]
#             }
#         }
#         return jsonify(data)
#     return render_template('login.html')


@app.route('/user/login', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        name = request.form['name']
        users = db.child('users').get()
        user_list = list((users.val()).values())
        # return user_list

        # if name is in DB
        if name in user_list:
            data = {
                "isin": True,
                "result": {
                    "userName": name
                }
            }
        else:
            db.child('users').push(name)
            data = {
                "isin": False,
                "result": {
                    "userName": name
                }
            }
        return jsonify(data)
    return render_template('login.html')


if __name__ == '__main__':
    app.run(debug=True)