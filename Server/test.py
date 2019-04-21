import sqlite3
import youtube_dl
import datetime
from sqlite3 import Error
try:
    conn = sqlite3.connect("tv_celeb.db", check_same_thread=False)
except Error as e:
    print(e)

cur = conn.cursor()

'''
cur.execute("CREATE TABLE videos (id INTEGER PRIMARY KEY, video_id VARCHAR(15), video_add_date VARCHAR(30), video_title VARCHAR(200)," + 
            "video_details TEXT, video_tags TEXT, video_characters TEXT, video_e_tags TEXT, video_channel_id VARCHAR(30), video_channel_name VARCHAR(50))")
'''

ydl = youtube_dl.YoutubeDL({'outtmpl': 'data/temp/%(title)s.%(ext)s'})
youtube_dl.YoutubeDL()
with ydl:
    result = ydl.extract_info(
        'https://www.youtube.com/watch?v=QMYpVHi2xLg',
        download=False # We just want to extract the info
    )
tags = ""
for tag in result["tags"]:
    tags = tags + tag + ","
print(tags)
data = (result["id"],
        str(datetime.datetime.now()),
        result["title"],
        result["description"],
        tags,
        "",
        "",
        result["channel_id"],
        result["uploader"])

for row in cur.execute("SELECT count(*) FROM videos where video_id=?", (result["id"],)):
    if row[0] == 0:
        cur.execute("INSERT INTO videos (video_id, video_add_date, video_title, video_details, video_tags, video_characters, video_e_tags, video_channel_id, video_channel_name) VALUES (?,?,?,?,?,?,?,?,?)", data)
conn.commit()