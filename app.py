from flask import Flask, send_from_directory
from flask import jsonify 
from flask_cors import CORS

# creates a Flask application, named app
app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

f = open("resume.json", "r")
taha = f.read()

@app.route("/")
def index():
    return send_from_directory('static', 'index.html')

# a route where we will display a welcome message via an HTML template
@app.route("/resume")
def resume():
    return taha
    

# run the application
if __name__ == "__main__":
    app.run(debug=False)
