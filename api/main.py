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
        resp = jsonify({"msg": "hello world"})
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
                "isSuccess": True,
                "message": "회원가입에 성공하였습니다.",
                "result": {
                    "isIn": False,
                    "userName": name,
                    "userEmail": email,
                    "userID": id
                }
            }
        else:
            user_list = list((users.val()).values())
            email_list = list()
            for i in user_list:
                email_list.append(i['userEmail'])

            if email in email_list:
                idx = email_list.index(email)

                user_key = list((users.val()).keys())
                id = user_key[idx]

                response = {
                    "isSuccess": True,
                    "message": "로그인에 성공하였습니다.",
                    "result": {
                        "isIn": True,
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
                    "isSuccess": True,
                    "message": "회원가입에 성공하였습니다.",
                    "result": {
                        "isIn": False,
                        "userName": name,
                        "userEmail": email,
                        "userID": id
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
                            "message": "ERROR; 이미 저장되어 있는 노트입니다.",
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
                "message": "노트 저장을 성공하였습니다.",
                "result": {}
            }
        else:
            response = {
                "isSuccess": False,
                "message": "ERROR; 존재하지 않는 userID입니다.",
                "result": {}
            }
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp
    
@app.route('/mynote', methods=['POST', 'GET', 'OPTIONS'])
def mynote():
    if request.method == 'OPTIONS':
        resp = jsonify({"msg" :"hello world"})
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp

    if request.method == 'GET':
        userID = request.args.get('userID')

        users = db.child('users').get()
        user_key = list((users.val()).keys())
        
        # id가 DB에 있으면 해당 id의 저장된 모든 노트를 조회
        if userID in user_key:
            notes = db.child('users').child(userID).child('notes').get()
            
            # 해당 userID에 노트가 하나도 저장되어 있지 않으면 "ERROR; 해당 userID에 노트가 존재하지 않습니다."
            if notes.val() == None:
                response = {
                    "isSuccess": False,
                    "message": "ERROR; 해당 userID에 노트가 존재하지 않습니다.",
                    "result": {}
                }
                resp = jsonify(response)
                resp.headers.add('Access-Control-Allow-Credentials', 'true')
                resp.headers.add('Content-Type', 'application/json')
                return resp
                
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
                "message": "노트 전체 조회에 성공하였습니다.",
                "result": resultList
            }
        else:
            response = {
                "isSuccess": False,
                "message": "ERROR; 존재하지 않는 userID입니다.",
                "result": {}
            }
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp

@app.route('/note/detail', methods=['POST', 'GET', 'OPTIONS'])
def detail():
    if request.method == 'OPTIONS':
        resp = jsonify({"msg" :"hello world"})
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp
        
    if request.method == 'GET':
        userID = request.args.get('userID')
        noteID = request.args.get('noteID')

        users = db.child('users').get()
        user_key = list((users.val()).keys())

        # userID가 없으면, ERROR; not exists userID
        if userID in user_key:
            notes = db.child('users').child(userID).child('notes').get()
            
            # 해당 userID에 노트가 하나도 저장되어 있지 않으면 "ERROR; 해당 userID에 노트가 존재하지 않습니다."
            if notes.val() == None:
                response = {
                    "isSuccess": False,
                    "message": "ERROR; 해당 userID에 노트가 존재하지 않습니다.",
                    "result": {}
                }
                resp = jsonify(response)
                resp.headers.add('Access-Control-Allow-Credentials', 'true')
                resp.headers.add('Content-Type', 'application/json')
                return resp

            note_key = list((notes.val()).keys())
            
            # noteID가 없으면, ERROR; not exists noteID
            if noteID in note_key:
                noteDict = (notes.val())[noteID]
                response = {
                    "isSuccess": True,
                    "message": "노트 상세 조회에 성공하였습니다.",
                    "result": {
                        "noteID": noteID,
                        "detail": noteDict
                    }
                }
            else:
                response = {
                    "isSuccess": False,
                    "message": "ERROR; 존재하지 않는 noteID입니다.",
                    "result": {}
                }
        else:
            response = {
                "isSuccess": False,
                "message": "ERROR; 존재하지 않는 userID입니다.",
                "result": {}
            }
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp
        
@app.route('/note/delete', methods=['GET', 'OPTIONS', 'DELETE'])
def delete():
    if request.method == 'OPTIONS':
        resp = jsonify({"msg" :"hello world"})
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp
        
    if request.method == 'GET':
        resp = jsonify({"msg" :"hello world"})
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp
    
    if request.method == 'DELETE':
        userID = request.args.get('userID')
        noteID = request.args.get('noteID')

        users = db.child('users').get()
        user_key = list((users.val()).keys())

        # userID가 없으면, ERROR; not exists userID
        if userID in user_key:
            notes = db.child('users').child(userID).child('notes').get()

            # 해당 userID에 노트가 하나도 저장되어 있지 않으면 "ERROR; 해당 userID에 노트가 존재하지 않습니다."
            if notes.val() == None:
                response = {
                    "isSuccess": False,
                    "message": "ERROR; 해당 userID에 노트가 존재하지 않습니다.",
                    "result": {}
                }
                resp = jsonify(response)
                resp.headers.add('Access-Control-Allow-Credentials', 'true')
                resp.headers.add('Content-Type', 'application/json')
                return resp
            
            note_key = list((notes.val()).keys())

            # noteID가 없으면, ERROR; not exists noteID
            if noteID in note_key:
                note_to_delete = db.child('users').child(userID).child('notes').child(noteID)
                note_to_delete.set(None)
                response = {
                    "isSuccess": True,
                    "message": "노트 삭제를 성공하였습니다.",
                    "result": {}
                }
            else:
                response = {
                    "isSuccess": False,
                    "message": "ERROR; 존재하지 않는 noteID입니다.",
                    "result": {}
                }
        else:
            response = {
                "isSuccess": False,
                "message": "ERROR; 존재하지 않는 userID입니다.",
                "result": {}
            }
        resp = jsonify(response)
        resp.headers.add('Access-Control-Allow-Credentials', 'true')
        resp.headers.add('Content-Type', 'application/json')
        return resp

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