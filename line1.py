#!/usr/bin/env python
from flask import Flask, render_template, request
from bs4 import BeautifulSoup
import requests, psycopg2
import sys
sys.path.append('./passw.py')
import passw

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    if request.method == 'POST':
        x = 0
        line = []
        for i in range(100):
            try:
                line.append(set(json_find(request.form['line'+ str(i+1)])))
            except:
                break
            else:
                x += 1
        while x > 1:
            line[x-2] = line[x-1] & line[x-2]
            x -= 1
        station = list(line[0])

        return render_template('index.html',station = station)

def json_find(linename):
    conn = passw.connectdb()
    cur = conn.cursor()
    cur.execute("SELECT liid FROM line where liname='" + linename + "';")
    result = cur.fetchall()
    list1 = [e for inner_list in result for e in inner_list]
    linenu = list1[0]
    ste = []
    url = "http://www.ekidata.jp/api/l/" + str(linenu) + ".xml"
    r = requests.get(url)
    soup = BeautifulSoup(r.text.encode(r.encoding), "lxml")
    for sname in soup.find_all('station_name'):
        ste.append(sname.string)
    return ste

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
