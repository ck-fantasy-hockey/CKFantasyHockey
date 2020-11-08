INSERT INTO players (team, status, position, gamesPlayed, goals, assists, points, shootoutGoals,
                                     hatTricks, plusMinus, pointsPerGame, shorthandedGoals, penaltyMinutes, blocks,
                                     wins, losses, overtimeLosses, shutOuts, goalsAllowedAverage, goalsAllowed, saves,
                                     savePercentage, minutesPlayed)
VALUES ('New York Rangers', 'active', 'C', 345, 2095, 1046, 325, 39, 2, 9203, 3, 32, 592, 53, null, null, null, null,
        null, null, null, null, null);

INSERT INTO users (userName, password, salt, email, sessionID, sessionExpires)
VALUES ('testuser', 'ckfantasy', 'abcdefgh', 'test@sports.net', null, null);

INSERT INTO leagues (leagueName)
VALUES ('Glorius Gophers');

INSERT INTO teams (teamName, userID, leagueID)
VALUES ('Terrible Titans', 1, 1);

INSERT INTO teamsplayers (teamID, playerID)
VALUES (1, 1);

INSERT INTO leaguesplayers (leagueID, playerID)
VALUES (1, 1);


