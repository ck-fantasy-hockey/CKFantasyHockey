from flask import Flask, render_template, request, jsonify
import json


app = Flask(__name__)

# Configuration

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Data Transportation

dataFromServer = {}

# Routes

@app.route('/')
def root():
    return render_template('index.j2', page="landing_page", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/team-view')
def team_view():
    return render_template('index.j2', page="team_view", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/join-league')
def join_team():
    return render_template('index.j2', page="join_league", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/create-team')
def create_team():
    dataFromServer = {
        "leagueID": request.args.get('leagueID') 
        }
    return render_template('index.j2', page="create_team", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/signup')
def signup():
    return render_template('index.j2', page="signup", css="style", css2="signup_login", dataFromServer=dataFromServer)

@app.route('/login')
def login():
    return render_template('index.j2', page="login", css="style", css2="signup_login", dataFromServer=dataFromServer)


# import user info json for testing
with open('test_data/account_info_test.json') as f:
    user_info = json.load(f)

# Client APIs
@app.route('/checklogin', methods=['POST'])
def checklogin():
    sent_info = request.get_json()
    if sent_info['username'] == user_info['username'] and sent_info['password'] == user_info['password']:
        return jsonify({'response': True})
    else:
        return jsonify({'response': False})
    

if __name__ == '__main__':
    app.run(port=5000)