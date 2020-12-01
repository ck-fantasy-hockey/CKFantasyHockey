-- These are some Database Manipulation queries for a partially implemented CK Fantasy Hockey web app 
-- using the ckfantasy database.

-- Gets the number of occurences of a specific username [!]
SELECT count(*) FROM Users WHERE userName = :username;

-- Gets the userID for a specific username [!]
SELECT userID FROM Users WHERE userName = :username LIMIT 0,1;

-- insert to create new user [!]
INSERT INTO Users SET userName = :username, password = :password, email = :email;

-- verify username and password combination is correct [!]
SELECT count(*) FROM Users WHERE userName = :userName AND password = :password;

-- gets current users email [!]
SELECT email FROM Users WHERE username = :username;

-- Update email address [!]
UPDATE Users SET email = :newemail WHERE userid = :userid;

-- Update password [!]
UPDATE Users SET password = :newpassword WHERE userid = :userid;

-- Retrive the users username, email address and number of teams they are on
-- for the dashboard [!]
SELECT Users.username,
       Users.email,
       COUNT(Teams.userID)
FROM Users
LEFT JOIN Teams ON Users.UserID = Teams.userID
WHERE Users.userID = :userID;

-- Retrieve the list of teams that the logged in user belongs to [!]
SELECT teamID,
       teamName,
       Leagues.leagueName
FROM Teams
LEFT JOIN Leagues ON Teams.leagueid = Leagues.leagueID
WHERE Teams.userID = :userid;

-- Retrieve the list of leagues that the logged in user belongs to [!]
SELECT Leagues.leagueID, leagueName, seasonEnds
FROM Leagues
INNER JOIN Teams ON Leagues.leagueID = Teams.leagueID
WHERE Teams.userID = :userid;

-- Get user team from teamID [!]
SELECT teamName FROM Teams WHERE teamid= :teamid LIMIT 0,1;

-- Create new league [!]
INSERT INTO leagues (leagueName, visibility, seasonEnds)
VALUES (:leagueName, :visibility, STR_TO_DATE(:seasonEnds, '%m-%d-%Y'));

-- Get all leagues [!]
SELECT * FROM leagues;

-- Create new team [!]
INSERT INTO Teams (teamName, userid, leagueid) VALUES (:teamname, :userid, :leagueid);

-- Get Team ID from team name [!]
SELECT teamID FROM Teams WHERE teamName = :teamName;

-- Delete team [!]
DELETE FROM Teams WHERE teamid = :teamid;

-- Delete player associations with a specific team when deleting a team [!]
DELETE FROM TeamsPlayers WHERE teamID = :teamID;

-- Get Players [!]
SELECT * From Players;

-- Insert Player [!]
INSERT INTO Players (playerName,
                     team,
                     position,
                     gamesPlayed,
                     goals,
                     assists,
                     points,
                     gameWinningGoals,
                     plusMinus,
                     shortHandedGoals,
                     penaltyMinutes,
                     blocks,
                     minutesPlayed)
VALUES (:playerName,
        :team,
        :position,
        :gamesPlayed,
        :goals,
        :assists,
        :points,
        :gameWinningGoals,
        :plusMinus,
        :shortHandedGoals,
        :penaltyMinutes,
        :blocks,
        :minutesPlayed);

-- Get available players in league [!]
SELECT Players.playerID AS `playerID`, playerName, position, goals, assists, points FROM Players
    LEFT JOIN (
        SELECT * FROM LeaguesPlayers WHERE leagueID = :leaugeID
    ) AS LP ON LP.playerID = Players.playerID
WHERE LP.playerID IS NULL;

-- Gets general league information for a specific league [!]
SELECT l.leagueid, l.leaguename, count(t.leagueid), l.seasonEnds
FROM Leagues AS l
    LEFT JOIN Teams AS t ON l.leagueid = t.leagueid
WHERE l.leagueid = :leagueid;

-- Gets league information based on a teamID [!]
SELECT leagues.leagueID as leagueID, leagueName, seasonEnds FROM leagues
INNER JOIN (
    SELECT teamID, leagueID FROM teams WHERE teamID = :teamID
) AS T ON T.leagueID = leagues.leagueID
LIMIT 0,1;

-- Gets team level information based on league ID [!]
SELECT t.teamid, t.teamname, u.username
FROM Teams AS t
    LEFT JOIN Users AS u ON t.userid = u.userid
WHERE t.leagueid = :leagueID;

-- Get number of teams in a league [!]
SELECT count(*) FROM Teams WHERE leagueid = :leagueid;

-- Get players that are on a team [!]
SELECT p.playerID as playerID, team, status, playerName,
    position, gamesPlayed, points, goals, assists, shootoutGoals, hatTricks,
    plusMinus, pointsPerGame, shorthandedGoals, penaltyMinutes, blocks,
    wins, losses, overtimeLosses, shutOuts, goalsAllowedAverage, goalsAllowed,
    saves, savePercentage, minutesPlayed  FROM teamsplayers
INNER JOIN (
    SELECT * FROM players
) AS p ON p.playerID = teamsplayers.playerID
WHERE teamID = :teamID;

-- Update team name [!]
UPDATE teams SET teamName = :teamName WHERE teamID = :teamID;

-- Update the season ends date of the league for a given team [!]
UPDATE leagues l
INNER JOIN (
    SELECT * FROM teams where teamID = :teamID
) AS t on t.leagueID = l.leagueID
SET l.seasonEnds = STR_TO_DATE(:seasonEndsDate, '%Y-%m-%d')
WHERE t.teamID = :teamID;

-- Add player to team [!]
INSERT INTO TeamsPlayers (teamid, playerid) VALUES (:teamid, :playerid);

-- Set player as taken in league [!]
INSERT INTO LeaguesPlayers (leagueID, playerid) VALUES (:leagueID, :playerID);

-- Remove player from team [!]
DELETE FROM TeamsPlayers WHERE playerid = :playerid AND teamid = :teamid;

-- Remove player from taken players in a league [!]
DELETE FROM LeaguesPlayers WHERE playerid = :playerid AND leagueid = :leagueid;

