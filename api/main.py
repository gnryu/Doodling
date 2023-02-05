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

@app.route('/', methods=['POST', 'GET', 'OPTIONS'])
def main():
    resp = jsonify({"msg" :"hello world"})
    resp.headers.add('Access-Control-Allow-Credentials', 'true')
    resp.headers.add('Content-Type', 'application/json')
    return resp

@app.route('/user/login', methods=['POST', 'GET', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        resp = jsonify({"msg" :"hello world"})
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp

    if request.method == 'POST':
        json_data = request.get_json()

        email = json_data['userEmail']
        name = json_data['userName']
        id = ""

        users = db.child('users').get()
        if users.val() == None:
            db.child('users').push(json_data)
            
            users = db.child('users').get()
            user_key = list((users.val()).keys())
            id = user_key[-1]

            response = {
                "isin": False,
                "result": {
                    "userName": name,
                    "userEmail": email,
                    "userID": id
                }
            }
        else:
            user_list = list((users.val()).values())
            print("\n====")
            print(user_list)
            email_list = list()
            for i in user_list:
                email_list.append(i['userEmail'])

            if email in email_list:
                # DB에 있는 userEmail에 맞는 userName을 다시 뽑아야 해
                idx = email_list.index(email)
                name = (user_list[idx])['userName']

                user_key = list((users.val()).keys())
                id = user_key[idx]
                print(id)

                response = {
                "isin": True,
                "result": {
                    "userName": name,
                    "userEmail": email,
                    "userID": id
                }
            }
            else:
                db.child('users').push(json_data)

                users = db.child('users').get()
                user_key = list((users.val()).keys())
                id = user_key[-1]

                user_list.append(email)
                response = {
                    "isin": False,
                    "result": {
                        "userName": name,
                        "userEmail": email,
                        "uesrID": id
                    }
                }
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp

@app.route('/note/save', methods=['POST', 'GET', 'OPTIONS'])
def save():
    if request.method == 'OPTIONS':
        resp = jsonify({"msg" :"hello world"})
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp

    if request.method == 'POST':
        json_data = request.get_json()

        id = json_data['userID']
        
        users = db.child('users').get()
        user_key = list((users.val()).keys())
        
        # id가 DB에 있으면 push하기, 없으면 id 정보가 없다고 에러 메세지 보내기
        if id in user_key:
            userNotes = db.child('users').child(id).child('notes').get()
            
            # 이미 DB에 저장되어 있는 노트라면 error message 보내기 
            if userNotes.val() != None:
                for pastNote in userNotes.val():
                    note = (userNotes.val())[pastNote]
                    if note == json_data:
                        response = {
                            "isSuccess": False,
                            "errorMsg": "same note is already store",
                            "result": {}
                        }
                        resp = jsonify(response)
                        resp.headers.add('Access-Control-Allow-Credentials', 'true')
                        resp.headers.add('Content-Type', 'application/json')
                        return resp
            
            # 새로운 노트라면 DB에 저장
            db.child('users').child(id).child('notes').push(json_data)
            response = {
                "isSuccess": True,
                "result": {}
            }
        else:
            response = {
                "isSuccess": False,
                "errorMsg": "not exists userID",
                "result": {}
            }
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp
    
@app.route('/mynote', methods=['POST', 'GET', 'OPTIONS'])
def mynote():
    if request.method == 'GET':
        ### TEST EXAMPLE
        # json_data = {
        #     "userID": "-NNWnSAxkfoNrdg1_FGa"
        # }
        json_data = request.get_json()

        userID = json_data['userID']

        users = db.child('users').get()
        user_key = list((users.val()).keys())
        
        # id가 DB에 있으면 해당 id의 저장된 모든 노트를 조회
        if userID in user_key:
            notes = db.child('users').child(userID).child('notes').get()
            noteKey = list((notes.val()).keys())

            noteList = list()
            for note in noteKey:
                noteID = note
                date = ((notes.val())[note])["date"]
                tags = ((notes.val())[note])["tags"]
                preview = str(((notes.val())[note])["content"])[:11]
                noteDict = {
                    "noteID": noteID,
                    "date": date,
                    "tags": tags,
                    "preview": preview
                }
                noteList.append(noteDict)
            resultList = noteList
            response = {
                "isSuccess": True,
                "result": resultList
            }
        else:
            response = {
                "isSuccess": False,
                "errorMsg": "not exists userID",
                "result": {}
            }
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp

@app.route('/note/detail', methods=['POST', 'GET', 'OPTIONS'])
def detail():
    if request.method == 'GET':
        ### TEST EXAMPLE
        # json_data = {
        #     "userID": "-NNWnSAxkfoNrdg1_FGa",
        #     "noteID": "-NNXM3TOdfqWt53X33km"
        # }
        json_data = request.get_json()

        userID = json_data['userID']
        noteID = json_data['noteID']

        users = db.child('users').get()
        user_key = list((users.val()).keys())

        # userID가 없으면, ERROR; not exists userID
        if userID in user_key:
            notes = db.child('users').child(userID).child('notes').get()
            note_key = list((notes.val()).keys())
            
            # noteID가 없으면, ERROR; not exists noteID
            if noteID in note_key:
                noteDict = (notes.val())[noteID]
                response = {
                    "isSuccess": True,
                    "result": {
                        "noteID": noteID,
                        "note": noteDict
                    }
                }
            else:
                response = {
                    "isSuccess": False,
                    "errorMsg": "not exists noteID",
                    "result": {}
                }
        else:
            response = {
                "isSuccess": False,
                "errorMsg": "not exists userID",
                "result": {}
            }
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp
        
@app.route('/note/delete', methods=['DELETE'])
def delete():
    ### TEST EXAMPLE
    json_data = {
        "userID": "-NNWnSAxkfoNrdg1_FGa",
        "noteID": "-NNXM3TOdfqWt53X33km"
    }
    # json_data = request.get_json()

    userID = json_data['userID']
    noteID = json_data['noteID']

    note = db.child('users').child(userID).child('notes').child(noteID)
    print(note)
    return note


@app.route('/tag/search', methods=['POST', 'GET', 'OPTIONS'])
def search():
    if request.method == 'GET':
        ### TEST EXAMPLE
        json_data = {
            "userID": "-NNWnSAxkfoNrdg1_FGa",
            "searchWord": "computer science"
        }
        # json_data = request.get_json()

        userID = json_data['userID']
        searchWord = json_data['searchWord']

        # userID가 없으면, ERROR; not exists userID
        # searchWord가 없으면, ERROR; not exists tag

        
if __name__ == '__main__':
    app.run(debug=True, port=8080)