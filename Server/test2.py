import sqlite3
import youtube_dl
import datetime
from sqlite3 import Error
try:
    conn = sqlite3.connect("tv_celeb.db", check_same_thread=False)
except Error as e:
    print(e)

cur = conn.cursor()

for row in cur.execute("SELECT count(*) FROM videos"):
    print(row)