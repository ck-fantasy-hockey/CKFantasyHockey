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

# pulls current user email
def user_email(username):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT email FROM Users WHERE username = %s"
    values = (username,)
    cursor.execute(query, values)
    results = cursor.fetchall()[0]
    cursor.close()
    cnx.close()
    return results

# updates user email from edit account page
def update_email(sent_info):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "UPDATE Users SET email = %s WHERE userName = %s"
    values = (sent_info['email'], sent_info['username'])
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    cnx.close()

# updates user password from edit account page
def update_password(sent_info):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "UPDATE Users SET password = %s WHERE userName = %s"
    values = (sent_info['password'], sent_info['username'])
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    cnx.close()

# pulls user info for dashboard
def user_info(userid):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT Users.username, Users.email, COUNT(Teams.userID) FROM Users LEFT JOIN Teams ON Users.UserID = Teams.userID WHERE Users.userID = %s"
    values = (userid,)
    cursor.execute(query, values)
    results = cursor.fetchall()[0]
    cursor.close()
    cnx.close()
    return results

# Pulls user's team info for dashboard
def user_teams(userid):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT teamID, teamName, Leagues.leagueName FROM Teams LEFT JOIN Leagues ON Teams.leagueid = Leagues.leagueID WHERE Teams.userID = %s"
    values = (userid,)
    cursor.execute(query, values)
    results = cursor.fetchall()
    cursor.close()
    cnx.close()
    return results

# Pulls user's league info for dashboard
def user_leagues(userid):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT Leagues.leagueID, leagueName, seasonEnds FROM Leagues INNER JOIN Teams ON Leagues.leagueID = Teams.leagueID WHERE Teams.userID = %s"
    values = (userid,)
    cursor.execute(query, values)
    results = cursor.fetchall()
    results = [list(elem) for elem in results]
    cursor.close()
    cnx.close()
    return results

# Counts number of teams in a league
def count_teams(leagueid):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT count(*) FROM Teams WHERE leagueid = %s"
    values = (leagueid,)
    cursor.execute(query, values)
    results = cursor.fetchall()
    cursor.close()
    cnx.close()
    return results

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

# pulls league info for league-view page
def league_info(leagueid):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT l.leagueid, l.leaguename, count(t.leagueid), l.seasonEnds FROM Leagues AS l LEFT JOIN Teams AS t ON l.leagueid = t.leagueid WHERE l.leagueid = %s"
    values = (leagueid,)
    cursor.execute(query, values)
    results = cursor.fetchall()
    results = [list(elem) for elem in results][0]
    cursor.close()
    cnx.close()
    return results

# pulls teams info in league for league-view page
def teams_in_league(leagueid):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT t.teamid, t.teamname, u.username FROM Teams AS t LEFT JOIN Users AS u ON t.userid = u.userid WHERE t.leagueid = %s"
    values = (leagueid,)
    cursor.execute(query, values)
    results = cursor.fetchall()
    results = [list(elem) for elem in results]
    print(results)
    cursor.close()
    cnx.close()
    return results

# selects all players from the players table
def select_all_players():
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor(dictionary=True)
    select_all_players_query = 'SELECT * FROM Players;'
    cursor.execute(select_all_players_query)
    results = cursor.fetchall()
    cursor.close()
    cnx.close()
    return results

def select_available_players_in_league(leagueID: int) -> dict:
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor(dictionary=True)
    select_available_players_query = """
        SELECT Players.playerID AS `playerID`, playerName, position, goals, assists, points FROM Players
        LEFT JOIN ( SELECT * FROM LeaguesPlayers WHERE leagueID = %s
        ) AS LP ON LP.playerID = Players.playerID WHERE LP.playerID IS NULL;
        """
    select_available_players_values = (leagueID,)
    cursor.execute(select_available_players_query, select_available_players_values)
    results = cursor.fetchall()
    cursor.close()
    cnx.close()
    return results

# Pull the specific roster for a players team
def get_roster_for_player_team(teamID: int) -> dict:

    # connect to the database and run the query using the teamID
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor(dictionary=True)
    team_roster_query = """
    SELECT p.playerID as playerID, team, status, playerName,
    position, gamesPlayed, points, goals, assists, shootoutGoals, hatTricks, 
    plusMinus, pointsPerGame, shorthandedGoals, penaltyMinutes, blocks, 
    wins, losses, overtimeLosses, shutOuts, goalsAllowedAverage, goalsAllowed, 
    saves, savePercentage, minutesPlayed  FROM teamsplayers
    INNER JOIN (
        SELECT * FROM players
    ) AS p ON p.playerID = teamsplayers.playerID
    WHERE teamID = %s
    """
    team_roster_values = (int(teamID),)
    cursor.execute(team_roster_query, team_roster_values)
    results = cursor.fetchall()
    cursor.close()
    cnx.close()

    # fix floating points that come back for goalsAllowedAverage, savePercentage
    for result in results:
        result['goalsAllowedAverage'] = str(result['goalsAllowedAverage'])
        result['savePercentage'] = str(result['savePercentage'])
    return results

# Get league information from team ID
def get_league_information_from_team_id(teamID: int) -> dict:
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor(dictionary=True)
    get_league_information_query = """
    SELECT leagues.leagueID as leagueID, leagueName, seasonEnds FROM leagues
    INNER JOIN (
        SELECT teamID, leagueID FROM teams WHERE teamID = %s
    ) AS T ON T.leagueID = leagues.leagueID
    LIMIT 0,1"""
    get_league_information_values = (int(teamID),)
    cursor.execute(get_league_information_query, get_league_information_values)
    results = cursor.fetchone()
    cursor.close()
    cnx.close()

    # convert league seasonEnds date
    results['seasonEnds'] = results['seasonEnds'].strftime('%m/%d/%Y')
    return results

def drop_player_from_team(team_player_league_dict: dict) -> bool:

    # unwrap the dictionary getting the required information
    playerID = team_player_league_dict['playerID']
    teamID = team_player_league_dict['teamID']
    leagueID = team_player_league_dict['leagueID']

    # make the connection and send the queries
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor(dictionary=True)
    drop_player_from_team_query = """
    DELETE FROM teamsplayers WHERE playerID = %s AND teamID = %s"""
    drop_player_from_team_values = (playerID, teamID)
    drop_player_from_league_query = """
    DELETE FROM leaguesplayers WHERE playerID = %s AND leagueID = %s"""
    drop_player_from_league_values = (playerID, leagueID)
    cursor.execute(drop_player_from_team_query, drop_player_from_team_values)
    cursor.execute(drop_player_from_league_query, drop_player_from_league_values)

    # commit the changes and return true after closing connection
    cnx.commit()
    cursor.close()
    cnx.close()

    return True

# Deletes all TeamsPlayers records for team to be deleted
def deletes_team(sent_info):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "DELETE FROM TeamsPlayers WHERE teamID = %s"
    values = (sent_info['teamid'], )
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    cnx.close()
    del_team(sent_info)
    return True

# Deletes team after TeamPlayers records are deleted
def del_team(sent_info):
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "DELETE FROM Teams WHERE teamID = %s"
    values = (sent_info['teamid'], )
    cursor.execute(query, values)
    cnx.commit()
    cursor.close()
    cnx.close()


# Get team name from team ID
def get_team_name_from_team_id(teamID: int) -> str:
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor(dictionary=True)
    get_team_name_query = "SELECT teamname FROM teams WHERE teamid = %s LIMIT 0,1"
    get_team_name_values = (teamID,)
    cursor.execute(get_team_name_query, get_team_name_values)
    results = cursor.fetchone()
    cursor.close()
    cnx.close()
    return results['teamname']

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

# Returns all current leagues in create league page
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
    cursor = cnx.cursor(buffered=True)
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
        print(add_teams_players_row_values)
        cursor.execute(add_teams_players_row_query, add_teams_players_row_values)

    # Add all the relationships between players and the current league in LeaguesPlayers
    for player in new_team['playersSelected']:
        add_leagues_players_row_query = 'INSERT INTO LeaguesPlayers (leagueID, playerID) VALUES (%s, %s);'
        add_leagues_players_row_values = (new_team['leagueID'], player['playerID'])
        cursor.execute(add_leagues_players_row_query, add_leagues_players_row_values)

    cnx.commit()
    cursor.close()
    cnx.close()
    

def update_team(updated_team_info: dict) -> bool:
    if updated_team_info['teamID'] is None:
        return False
    
    if updated_team_info['teamName'] is None and updated_team_info['seasonEnds'] is None:
        return False
    
    teamName = updated_team_info['teamName']
    seasonEnds = updated_team_info['seasonEnds']
    teamID = updated_team_info['teamID']

    update_team_name_query = 'UPDATE teams SET teamName = %s WHERE teamID = %s'
    update_team_name_values = (teamName, teamID)

    update_team_season_end_date_query = """
    UPDATE leagues l
    INNER JOIN (
        SELECT * FROM teams where teamID = %s
    ) AS t on t.leagueID = l.leagueID
    SET l.seasonEnds = STR_TO_DATE(%s, '%Y-%m-%d')
    WHERE t.teamID = %s;"""
    update_team_season_end_date_values = (teamID, seasonEnds, teamID)

    if teamName is not None:
        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()
        cursor.execute(update_team_name_query, update_team_name_values)
        cnx.commit()
        cursor.close()
        cnx.close()

    if seasonEnds is not None:
        cnx = mysql.connector.connect(**config)
        cursor = cnx.cursor()
        cursor.execute(update_team_season_end_date_query, update_team_season_end_date_values)
        cnx.commit()
        cursor.close()
        cnx.close()

    return True




    

