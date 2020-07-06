from flask import Flask,request
from flask_cors import *

app = Flask(__name__)
CORS(app,supports_credentials=True)

@app.route('/',methods=["GET"])
def index():
    print(1234)
    print(request.form)
    print(request.values)
    return "success login!"
if __name__ == '__main__':
    app.run()