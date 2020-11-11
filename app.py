from flask import Flask, render_template, request, jsonify
import requests
import json
import os
import database.db_functions
from playerstats import pull_roster, pull_player_stats

app = Flask(__name__)

# Configurations

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
database.db_functions.establish_connection()

# Data Transportation

dataFromServer = {}

# Routes

@app.route('/data')
def data():
    """Placeholder route for viewing stats"""
    stats = pull_player_stats()
    return str(stats)

@app.route('/')
def root():
    return render_template('index.j2', page="landing_page", css="style", css2="signup_login", dataFromServer=dataFromServer)

@app.route('/dashboard')
def dashboard():
    return render_template('index.j2', page="dashboard", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/team-view')
def team_view():
    return render_template('index.j2', page="team_view", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/league-view')
def league_view():
    return render_template('index.j2', page="league_view", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/join-league')
def join_team():
    return render_template('index.j2', page="join_league", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/create-team')
def create_team():
    dataFromServer = {
        "leagueID": request.args.get('leagueID') 
        }
    return render_template('index.j2', page="create_team", css="style", css2="create_team", dataFromServer=dataFromServer)

@app.route('/account-page')
def account_page():
    return render_template('index.j2', page="edit_account", css="style", css2="signup_login", dataFromServer=dataFromServer)

# @app.route('/signup')
# def signup():
#     return render_template('index.j2', page="signup", css="style", css2="signup_login", dataFromServer=dataFromServer)

@app.route('/login')
def login():
    return render_template('index.j2', page="login", css="style", css2="signup_login", dataFromServer=dataFromServer)


# import user info json for testing
with open('test_data/account_info_test.json') as f:
    user_info = json.load(f)

# Client APIs
@app.route('/checklogin', methods=['POST'])
def checklogin():
    user_accounts = user_info['accounts']
    sent_info = request.get_json()
    for account in user_accounts:
        if sent_info['username'] == account['username'] and sent_info['password'] == account['password']:
            return jsonify({'response': True})
    return jsonify({'response': False})

@app.route('/submitsignup', methods=['POST'])
def submit_signup():
    """Verifies unique login and saves signup data"""
    user_accounts = user_info['accounts']
    sent_info = request.get_json()
    for account in user_accounts:
        if sent_info['username'] == account['username']:
            return jsonify({'response': False})
    user_accounts.append(sent_info)
    with open('test_data/account_info_test.json', 'w') as outfile:
        json.dump(user_info, outfile)
    return jsonify({'response': True})

    

if __name__ == '__main__':
    # Will set port to 5000 on local machine, but allow Heroku to bind on deployment.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)