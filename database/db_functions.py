import mysql.connector
import os
from dotenv import load_dotenv
load_dotenv()
from datetime import date
from dateutil.relativedelta import relativedelta

# Get the environment variables where sensitive logon information securely stored
config = {
    'user': os.environ.get('DB_USER'),
    'password': os.environ.get('DB_PASSWORD'),
    'host': os.environ.get('DB_HOST'),
    'database': os.environ.get('DB_DATABASE')
    }
    
if os.environ.get('FLASK_ENV') == 'production':
    config['ssl_disabled'] = True

# Test function
def establish_connection():

    # Make the connection
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT * FROM Players;"
    cursor.execute(query)
    cursor.fetchall()
    cursor.close()
    cnx.close()

# Checks if username when signing up is unique
def check_if_unique(user_info):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    username = user_info['username']
    query = "SELECT count(*) FROM Users WHERE userName = %s"
    values = (username,)
    cursor.execute(query, values)
    results = cursor.fetchall()
    cursor.close()
    cnx.close()
    if results[0][0] >= 1:
        return False
    return True

# inserts new user via signup
def insert_user(user_info):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    username = user_info['username']
    password = user_info['password']
    email = user_info['email']
    query = "INSERT INTO Users SET userName = %s, password = %s, email = %s"
    values = (username, password, email)
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    cnx.close()

# Confirms username and password matches a user in db
def check_login(user_info):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    username = user_info['username']
    password = user_info['password']
    query = "SELECT count(*) FROM Users WHERE userName = %s AND password = %s"
    values = (username, password)
    cursor.execute(query, values)
    results = cursor.fetchall()
    cursor.close()
    cnx.close()
    if results[0][0] == 1:
        return True
    return False

# Returns the userID for an associated username
def get_user_id_from_username(userName: str) -> int:
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT userID FROM Users WHERE userName = %s LIMIT 0,1"
    print(userName)
    values = userName,
    cursor.execute(query, values)
    results = cursor.fetchone()
    cursor.close()
    cnx.close()
    return int(results[0])

# inserts player data via NHL API
def insert_player_data(players):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    count = 1
    player_data = [x for x in players if x != None]
    for i in range(len(player_data)):
        if player_data[i]['position'] != 'Goalie':
            query = "INSERT INTO players (playerName, team, position, gamesPlayed, goals, assists, points, gameWinningGoals, plusMinus, shortHandedGoals, penaltyMinutes, blocks, minutesPlayed)\
            VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)"
            values = (player_data[i]['name'],player_data[i]['team'],player_data[i]['position'],player_data[i]['stats']['games'],player_data[i]['stats']['goals'], player_data[i]['stats']['assists'],player_data[i]['stats']['points'],player_data[i]['stats']['gameWinningGoals'],player_data[i]['stats']['plusMinus'],player_data[i]['stats']['shortHandedGoals'],player_data[i]['stats']['penaltyMinutes'],player_data[i]['stats']['blocked'],player_data[i]['stats']['timeOnIce'])
            cursor.execute(query, values)
            print(count)
            count += 1
    cnx.commit()
    cursor.close()
    cnx.close()

# selects all players from the players table
def select_all_players():
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    select_all_players_query = 'SELECT * FROM Players;'
    cursor.execute(select_all_players_query)
    results = cursor.fetchall()
    cursor.close()
    cnx.close()
    print results()
    

# Creates a new league in the database
def create_league(new_league: dict):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "INSERT INTO leagues (leagueName, visibility, seasonEnds) VALUES (%s, %s, STR_TO_DATE(%s, '%m-%d-%Y'));"
    now = date.today()
    delta = relativedelta(months=6)
    seasonEnds = now + delta
    seasonEndsString = seasonEnds.strftime('%m-%d-%Y')
    values = (new_league['leagueName'], new_league['visibility'], seasonEndsString)
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    cnx.close()

# Returns a list of all leagues
def get_all_leagues() -> list:
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT * FROM leagues;"
    cursor.execute(query)
    results = cursor.fetchall()
    cnx.commit()
    cursor.close()
    cnx.close()

    leagues = []
    print(results)
    for league in results:
        if league[2] == 'public':
            joinable = True
        else:
            joinable = False
        temp = {
            'leagueID': int(league[0]),
            'name': str(league[1]),
            'teams': 0,
            'visibility': str(league[2]).title(),
            'seasonEndDate': league[3].strftime('%m-%d-%Y'),
            'joinable': joinable
        }
        leagues.append(temp)

    return leagues

# Creates a new team in the database
def create_new_team(new_team: dict) -> bool:
    """Creates a new team in the database, returns True if it was successful, and False if there was an error"""
    user_id = get_user_id_from_username(new_team['username'])
    
    # Create the row in the Teams Table
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    insert_teams_query =  'INSERT INTO teams (teamName, userID, leagueID) VALUES ('
    insert_teams_query += '%s, %s, %s);'
    insert_teams_values = (new_team['teamName'], user_id, new_team['leagueID'])
    cursor.execute(insert_teams_query, insert_teams_values)

    # Get the new team ID
    get_team_id_query = 'SELECT teamID FROM Teams WHERE teamName = %s;'
    get_team_id_values = (new_team['teamName'],)
    cursor.execute(get_team_id_query, get_team_id_values)
    team_id = cursor.fetchone()[0]

    # Add all the relationships between players and the new team in TeamsPlayers
    for player in new_team['playersSelected']:
        add_teams_players_row_query = 'INSERT INTO TeamsPlayers (teamID, playerID) VALUES (%s, %s);'
        add_teams_players_row_values = (team_id, player['playerID'])
        cursor.execute(add_teams_players_row_query, add_teams_players_row_values)

    # Add all the relationships between players and the current league in LeaguesPlayers
    for player in new_team['playersSelected']:
        add_leagues_players_row_query = 'INSERT INTO LeaguesPlayers (leagueID, playerID) VALUES (%s, %s);'
        add_leagues_players_row_values = (new_team['leagueID'], player['playerID'])
        cursor.execute(add_leagues_players_row_query, add_leagues_players_row_values)
    
    cnx.commit()
    cursor.close()
    cnx.close()


    

