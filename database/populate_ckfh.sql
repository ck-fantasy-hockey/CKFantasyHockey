USE ckfantasyhockey;

INSERT INTO ckfantasyhockey.players (team, status, position, gamesPlayed, goals, assists, points, shootoutGoals,
                                     hatTricks, plusMinus, pointsPerGame, shorthandedGoals, penaltyMinutes, blocks,
                                     wins, losses, overtimeLosses, shutOuts, goalsAllowedAverage, goalsAllowed, saves,
                                     savePercentage, minutesPlayed)
VALUES ('New York Rangers', 'active', 'C', 345, 2095, 1046, 325, 39, 2, 9203, 3, 32, 592, 53, null, null, null, null,
        null, null, null, null, null);

INSERT INTO ckfantasyhockey.users (userName, password, salt, email, sessionID, sessionExpires)
VALUES ('testuser', 'ckfantasy', 'abcdefgh', 'test@sports.net', null, null);

INSERT INTO ckfantasyhockey.leagues (leagueName)
VALUES ('Glorius Gophers');

INSERT INTO ckfantasyhockey.teams (teamName, userID, leagueID)
VALUES ('Terrible Titans', 1, 1);

INSERT INTO ckfantasyhockey.teamsplayers (teamID, playerID)
VALUES (1, 1);

INSERT INTO ckfantasyhockey.leaguesplayers (leagueID, playerID)
VALUES (1, 1);


