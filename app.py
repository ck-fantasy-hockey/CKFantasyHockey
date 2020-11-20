from flask import Flask, render_template, request, jsonify, make_response
import jwt
import requests
import json
import os
import database.db_functions
from playerstats import pull_roster, pull_player_stats


app = Flask(__name__)

# Configurations

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
database.db_functions.establish_connection()

#This will eventually store the results of the NHL API call to import into DB
dataFromNHL = []

dataFromServer = {}

# JWT Authentication
@app.route('/checklogin', methods=['POST'])
def checklogin():
    sent_info = request.get_json()
    login_result = database.db_functions.check_login(sent_info)
    print(login_result)

# Routes

@app.route('/player-data')
def player_data():
    """Placeholder route for viewing stats"""
    stats = pull_player_stats()
    # return stats[21]
    # # for i in range(len(stats)):
    # #     if not stats[i]:
    # #         print(i)
    database.db_functions.insert_player_data(stats)
    return "Player Data Inserted"


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
def join_league():
    leagues = database.db_functions.get_all_leagues()
    print(leagues)
    dataFromServer = {
        "leagues": leagues
    }
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

@app.route('/login')
def login():
    return render_template('index.j2', page="login", css="style", css2="signup_login", dataFromServer=dataFromServer)

# Client APIs
# @app.route('/checklogin', methods=['POST'])
# def checklogin():
#     user_accounts = user_info['accounts']
#     sent_info = request.get_json()
#     for account in user_accounts:
#         if sent_info['username'] == account['username'] and sent_info['password'] == account['password']:
#             return jsonify({'response': True})
#     return jsonify({'response': False})

@app.route('/submitsignup', methods=['POST'])
def submit_signup():
    sent_info = request.get_json()
    check_unique = database.db_functions.check_if_unique(sent_info)
    if check_unique == False:
        return jsonify({'response': False})
    else:
        database.db_functions.insert_user(sent_info)
        return jsonify({'response': True})



@app.route('/add-new-league', methods=['POST'])
def add_new_league():
    """Adds a new league to the database"""
    database.db_functions.create_league(request.get_json())
    return jsonify({'response': True})

if __name__ == '__main__':
    # Will set port to 5000 on local machine, but allow Heroku to bind on deployment.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)