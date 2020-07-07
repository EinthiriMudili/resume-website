from flask import Flask
from flask import jsonify 
from flask_cors import CORS

# creates a Flask application, named app
app = Flask(__name__)
CORS(app)

f = open("resume.json", "r")
taha = f.read()

# a route where we will display a welcome message via an HTML template
@app.route("/resume")
def resume():
    return taha
    

# run the application
if __name__ == "__main__":
    app.run(debug=False)
