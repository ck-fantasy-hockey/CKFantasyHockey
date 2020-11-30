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
    username = jwt.decode(request.args.get('token'), app.config['SECRET_KEY'])['username']
    userid = database.db_functions.get_user_id_from_username(username)
    data = {'username': "",'email': "",'team_count': "", 'team_info': "", 'league_info': ""}
    user_info = database.db_functions.user_info(userid)
    data['username'] = user_info[0]
    data['email'] = user_info[1]
    data['team_count'] = user_info[2]
    data['team_info'] = database.db_functions.user_teams(userid)
    data['league_info'] = database.db_functions.user_leagues(userid)
    for i in range(len(data['league_info'])):
        no_of_teams = database.db_functions.count_teams(data['league_info'][i][0])
        data['league_info'][i].append(no_of_teams[0])
    dataFromServer = data
    return render_template('index.j2', page="dashboard", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/team-view', methods=['GET'])
@token_required
def team_view():

    teamID = request.args.get('teamID')
    players = database.db_functions.get_roster_for_player_team(teamID)
    team_name = database.db_functions.get_team_name_from_team_id(teamID)
    league_info = database.db_functions.get_league_information_from_team_id(teamID)
    dataFromServer = {
        'players': players,
        'teamName': team_name,
        'leagueInfo': league_info
    }
    return render_template('index.j2', page="team_view", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/league-view')
@token_required
def league_view():
    leagueid = request.args.get('leagueid')
    leaguedata = database.db_functions.league_info(leagueid)
    teamdata = database.db_functions.teams_in_league(leagueid)
    dataFromServer = {'leaguedata': leaguedata, 'teamdata': teamdata}
    return render_template('index.j2', page="league_view", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/join-league')
@token_required
def join_league():
    leagues = database.db_functions.get_all_leagues()
    dataFromServer = {
        "leagues": leagues
    }
    return render_template('index.j2', page="join_league", css="style", css2="style", dataFromServer=dataFromServer)

@app.route('/create-team')
@token_required
def create_team():
    leagueID = request.args.get('leagueID')
    players = database.db_functions.select_available_players_in_league(leagueID)
    dataFromServer = {
        "leagueID": leagueID,
        "players": players
        }
    return render_template('index.j2', page="create_team", css="style", css2="create_team", dataFromServer=dataFromServer)

@app.route('/update-team-attributes', methods=['POST'])
def update_team():
    sent_info = request.get_json()
    print(sent_info)
    return jsonify({'response': True})


@app.route('/account-page')
@token_required
def account_page():
    username = jwt.decode(request.args.get('token'), app.config['SECRET_KEY'])['username']
    email = database.db_functions.user_email(username)[0]
    dataFromServer = {'username': username, 'email': email}

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

@app.route('/update-email', methods=['POST'])
def update_email():
    sent_info = request.get_json()
    database.db_functions.update_email(sent_info)
    return jsonify({'email': sent_info['email']})

@app.route('/update-password', methods=['POST'])
def update_password():
    sent_info = request.get_json()
    database.db_functions.update_password(sent_info)
    return jsonify({'password': True})

@app.route('/add-new-league', methods=['POST'])
def add_new_league():
    """Adds a new league to the database"""
    database.db_functions.create_league(request.get_json())
    return jsonify({'response': True})

@app.route('/add-new-team', methods=['POST'])
def add_new_team():
    """Adds a new team to the database"""

    # Get the information from the client and convert to dict
    sent_info = request.get_json()

    # Get the username from the token
    data = jwt.decode(sent_info['token'], app.config['SECRET_KEY'])
    sent_info['username'] = data['username']

    # Create the new team
    database.db_functions.create_new_team(sent_info)
    return jsonify({'response': True})

@app.route('/drop-player', methods=['POST'])
def drop_player():
    """Drops a player from a user's team"""

    # Get the information from client
    sent_info = request.get_json()
    
    return jsonify({'response': database.db_functions.drop_player_from_team(sent_info)})

if __name__ == '__main__':
    # Will set port to 5000 on local machine, but allow Heroku to bind on deployment.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)