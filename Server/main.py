from flask import Flask, request
import sqlite3
from sqlite3 import Error
from flask import jsonify
try:
    conn = sqlite3.connect("tv_celeb.db", check_same_thread=False)
except Error as e:
    print(e)

cur = conn.cursor()
app = Flask(__name__)

@app.route("/")
def main():
    return "App is Working"

@app.route("/search", methods=['GET'])
def addVideo():
    data = []
    searchQ = request.args["q"]
    for row in cur.execute("SELECT * FROM videos WHERE video_tags like ?", ('%'+searchQ+'%',)):
        data.append({
            "title": row[3],
            "youtube_url": "https://www.youtube.com/watch?v=" + row[1],
            "thumbnail": "https://i.ytimg.com/vi/" + row[1] + "/hqdefault.jpg",
            "details": row[4],
            "channel": "https://www.youtube.com/channel/" + row[8],
            "channel_name": row[9],
            "tags": row[5]
        })
    return jsonify(data)

@app.route("/featured-videos")
def getFeatured():
    data = []
    for row in cur.execute("SELECT * FROM videos ORDER BY id DESC LIMIT 10"):
        data.append({
            "title": row[3],
            "youtube_url": "https://www.youtube.com/watch?v=" + row[1],
            "thumbnail": "https://i.ytimg.com/vi/" + row[1] + "/hqdefault.jpg",
            "details": row[4],
            "channel": "https://www.youtube.com/channel/" + row[8],
            "channel_name": row[9],
            "tags": row[5]
        })
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)