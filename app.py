from flask import Flask
from flask import jsonify

# creates a Flask application, named app
app = Flask(__name__)

# a route where we will display a welcome message via an HTML template
@app.route("/resume")
def resume():
    f = open("resume.json", "r")
    return (f.read())

# run the application
if __name__ == "__main__":
    app.run(debug=False)
