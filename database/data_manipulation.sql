-- These are some Database Manipulation queries for a partially implemented CK Fantasy Hockey web app 
-- using the ckfantasy database.

-- get userid user logs in
SELECT userid FROM Users WHERE userName = :username;

-- insert to create new user
INSERT INTO Users (userName, password, salt, email, sessionID, sessionExpires) VALUES (:username, :password, :salt, :email, :sessionid, sessionExpires);

-- Update email address
UPDATE Users SET email = :newemail WHERE userid = :userid;

-- Update password
UPDATE Users SET password = :newpassword WHERE userid = :userid;

-- Get leagues user is in
SELECT leagueName FROM Leagues AS l
INNER JOIN Teams AS t ON l.leagueid = t.leagueid
ON t.userid = :userid;

-- Get Teams user has created
SELECT teamName FROM Teams WHERE userid = :userid;

--Get user team
SELECT teamName FROM Teams WHERE teamid= :teamid;

-- Create new league
INSERT INTO Leagues (leagueName) VALUES (:leaguename);

-- Create new team
INSERT INTO Teams (teamName, userid, leagueid) VALUES (:teamname, :userid, :leagueid);

-- Delete team
DELETE FROM Teams WHERE teamid = :teamid;

-- Get Players
SELECT * From Players;

-- Get Skaters
SELECT * FROM Players WHERE NOT position = 'Goalie';

-- Get Goalies
SELECT * FROM Players WHERE position = 'Goalie';

-- Insert Player
INSERT INTO players (playerName, team, position, gamesPlayed, goals, assists, points, gameWinningGoals, plusMinus, shortHandedGoals, penaltyMinutes, blocks, minutesPlayed)
VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);

-- Update Player
UPDATE Players SET playerName = :playername, team = :team, position = :position, gamesPlayed = :gamesplayed, goals = :goals, assists = :assists, points = :points,
gameWinningGoals = :gamewinninggoals, plusMinus = :plusminus, shortHandedGoals = :shorthandedgoals, penaltyMinutes = :penaltyminutes, blocks = :blocks, minutesPlayed = :minutesplayed
WHERE playerid = :playerid

-- Get players on a team
SELECT playerName, team, position, gamesPlayed, goals, assists, points, gameWinningGoals, plusMinus, shortHandedGoals, penaltyMinutes, blocks, minutesPlayed FROM Players AS p
INNER JOIN TeamsPlayers AS tp ON p.playerid=tp.playerid
ON tp.teamid = :teamid;

-- Get available players in league
SELECT playerName, team, position, gamesPlayed, goals, assists, points, gameWinningGoals, plusMinus, shortHandedGoals, penaltyMinutes, blocks, minutesPlayed FROM Players AS p
LEFT JOIN LeaguesPlayers AS lp ON p.playerid=lp.playerid 
WHERE lp.playerid IS NULL;

-- Add player to team
INSERT INTO TeamsPlayers (teamid, playerid) VALUES (:teamid, :playerid);

-- Set player as taken in league
INSERT INTO LeaguesPlayers (teamid, playerid) VALUES (:teamid, :playerid);

