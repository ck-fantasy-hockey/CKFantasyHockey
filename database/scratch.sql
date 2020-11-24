SELECT p.playerID as playerID, team, status, playerName, position, gamesPlayed, goals, assists, shootoutGoals, hatTricks, plusMinus, pointsPerGame, shorthandedGoals, penaltyMinutes, blocks, wins, losses, overtimeLosses, shutOuts, goalsAllowedAverage, goalsAllowed, saves, savePercentage, minutesPlayed  FROM teamsplayers
INNER JOIN (
    SELECT * FROM players
    ) AS p ON p.playerID = teamsplayers.playerID
WHERE teamID = 3