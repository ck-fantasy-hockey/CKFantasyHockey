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

def check_login(user_info):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    username = user_info['username']
    password = user_info['password']
    query = "SELECT count(*) FROM Users WHERE userName = %s AND password = %s"
    values = (username, password)
    cursor.execute(query, values)
    # cnx.commit()
    results = cursor.fetchall()
    cursor.close()
    cnx.close()
    if results[0][0] == 1:
        return True
    return False

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