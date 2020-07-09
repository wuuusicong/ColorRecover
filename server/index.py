from flask import Flask,request
from flask_cors import *
import ast
import json
import cv2
import numpy as np
import os

def RGBDecomposion(image):
    image_Origin = cv2.imread(image)
    image_RGB = cv2.cvtColor(image_Origin, cv2.COLOR_BGR2RGB)
    # plt.imshow(image_RGB)
    # plt.show()

    # %%

    r, g, b = cv2.split(image_RGB)
    colors = image_RGB.reshape((image_RGB.shape[0] * image_RGB.shape[1], 3))

    # %%

    # %%

    liColor = [[color[0], color[1], color[2]] for color in colors]  # rgb(29, 63, 61)

    # %%
    return liColor







app = Flask(__name__)
CORS(app,supports_credentials=True)


@app.route('/',methods=["POST"])
def index():
    image = request.files.get('file')
    imgSrc = basedir + '/static/' + image.filename
    image.save(imgSrc)
    print(imgSrc)
    return {'url':'/static/' + image.filename,
            'name':image.filename}

@app.route('/file',methods=["POST"])
def index2():
    print(request.data)
    data = str(request.data)
    data = data[1:]
    print(data)
    data2 = ast.literal_eval(data)
    data3 = json.loads(data2)
    print(type(data3))
    print(data3)
    print(data3["imgName"])
    RGBdata = np.array(RGBDecomposion("./static/"+data3["imgName"]),dtype=int)
    RGBdata = RGBdata.tolist()
    print(RGBdata)
    return json.dumps({"data":RGBdata},ensure_ascii=False), 200, {"Content-Type": "application/json"}
if __name__ == '__main__':
    print(os.path.dirname(__file__))
    basedir = os.path.dirname(__file__)
    print(basedir)
    app.run()

