from flask import Flask, render_template, request, jsonify, make_response
import jwt
import datetime
import requests
import json
import os
import database.db_functions
from functools import wraps
from playerstats import pull_roster, pull_player_stats


app = Flask(__name__)

# Configurations

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['SECRET_KEY'] = 'secretkey'
database.db_functions.establish_connection()

#This will eventually store the results of the NHL API call to import into DB
dataFromNHL = []

dataFromServer = {}

# JWT Authentication wrapper

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        print(request.args)
        token = request.args.get('token')

        if not token:
            return render_template('index.j2', page="login", css="style", css2="signup_login", dataFromServer=dataFromServer)

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
        except:
            return render_template('index.j2', page="login", css="style", css2="signup_login", dataFromServer=dataFromServer)

        return f(*args, **kwargs)
    
    return decorated

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
@token_required
def dashboard():
    return render_template('index.j2', page="dashboard", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/team-view')
@token_required
def team_view():
    return render_template('index.j2', page="team_view", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/league-view')
@token_required
def league_view():
    return render_template('index.j2', page="league_view", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/join-league')
@token_required
def join_league():
    leagues = database.db_functions.get_all_leagues()
    print(leagues)
    dataFromServer = {
        "leagues": leagues
    }
    return render_template('index.j2', page="join_league", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/create-team')
@token_required
def create_team():
    dataFromServer = {
        "leagueID": request.args.get('leagueID') 
        }
    return render_template('index.j2', page="create_team", css="style", css2="create_team", dataFromServer=dataFromServer)

@app.route('/account-page')
@token_required
def account_page():
    return render_template('index.j2', page="edit_account", css="style", css2="signup_login", dataFromServer=dataFromServer)

@app.route('/login')
@token_required
def login():
    return render_template('index.j2', page="login", css="style", css2="signup_login", dataFromServer=dataFromServer)

# Client APIs

@app.route('/checklogin', methods=['POST'])
def checklogin():
    sent_info = request.get_json()
    login_result = database.db_functions.check_login(sent_info)
    if login_result == True:
        token = jwt.encode({'username': sent_info['username'], 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60)}, app.config['SECRET_KEY'])
        return jsonify({'response': True, 'token': token.decode('UTF-8')})
    return jsonify({'response': False})

@app.route('/submitsignup', methods=['POST'])
def submit_signup():
    sent_info = request.get_json()
    check_unique = database.db_functions.check_if_unique(sent_info)
    if check_unique == False:
        return jsonify({'response': False})
    else:
        database.db_functions.insert_user(sent_info)
        return jsonify({'response': True})

@app.route('/pull-dashboard', methods=['POST'])
def pull_dashboard():
    username = jwt.decode(request.get_json(), app.config['SECRET_KEY'])['username']
    user_info = database.db_functions.user_info(username)
    # user_leagues = database.db_functions.user_leagues(username)
    # user_teams = database.db_functions.create_league(username)
    print(user_info)
    

@app.route('/add-new-league', methods=['POST'])
def add_new_league():
    """Adds a new league to the database"""
    database.db_functions.create_league(request.get_json())
    return jsonify({'response': True})

if __name__ == '__main__':
    # Will set port to 5000 on local machine, but allow Heroku to bind on deployment.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)