DROP TABLE IF EXISTS Users, Players, Teams, Leagues, TeamsPlayers, LeaguesPlayers;

CREATE TABLE Users (
    userID int AUTO_INCREMENT NOT NULL,
    userName varchar(24) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    salt varchar(24) NOT NULL,
    email varchar(255) NOT NULL,
    sessionID varchar(255),
    sessionExpires datetime,
    PRIMARY KEY (userID)
);

CREATE TABLE Players (
    playerID int AUTO_INCREMENT NOT NULL UNIQUE,
    team varchar(255) NOT NULL,
    status ENUM('injured', 'injured reserve', 'suspended', 'active') NOT NULL,
    position varchar(3) NOT NULL,
    gamesPlayed int NOT NULL,
    goals int,
    assists int,
    points int,
    shootoutGoals int,
    hatTricks int,
    plusMinus int,
    pointsPerGame int,
    shorthandedGoals int,
    penaltyMinutes int,
    blocks int,
    wins int,
    losses int,
    overtimeLosses int,
    shutOuts int,
    goalsAllowedAverage DECIMAL(4,3),
    goalsAllowed int,
    saves int,
    savePercentage DECIMAL(4,3),
    minutesPlayed int,
    PRIMARY KEY (playerID)
);

CREATE TABLE Leagues (
    leagueID int AUTO_INCREMENT NOT NULL UNIQUE,
    leagueName varchar(255),
    PRIMARY KEY (leagueID)
);

CREATE TABLE Teams (
    teamID int AUTO_INCREMENT NOT NULL UNIQUE,
    teamName varchar(255) NOT NULL,
    userID int,
    leagueID int,
    FOREIGN KEY (userID) REFERENCES Users(userID),
    FOREIGN KEY (leagueID) REFERENCES Leagues(leagueID),
    PRIMARY KEY (teamID)
);

CREATE TABLE TeamsPlayers (
    teamID int,
    playerID int,
    FOREIGN KEY (teamID) REFERENCES Teams(teamID),
    FOREIGN KEY (playerID) REFERENCES Players(playerID),
    PRIMARY KEY (teamID, playerID)
);

CREATE TABLE LeaguesPlayers (
    leagueID int,
    playerID int,
    FOREIGN KEY (leagueID) REFERENCES Leagues(leagueID),
    FOREIGN KEY (playerID) REFERENCES Players(playerID),
    PRIMARY KEY (leagueID, playerID)
);