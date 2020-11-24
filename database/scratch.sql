SELECT leagues.leagueID as leagueID, leagueName, seasonEnds FROM leagues
INNER JOIN (
    SELECT teamID, leagueID FROM teams WHERE teamID = 9
    ) AS T ON T.leagueID = leagues.leagueID
LIMIT 0,1;