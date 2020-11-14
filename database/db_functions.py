import mysql.connector
import os
from dotenv import load_dotenv
load_dotenv()

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
    # cursor.fetchall()
    cursor.close()
    cnx.close()