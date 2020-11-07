
export default {
    userInfo: {
            userID: 24,
            userName: "Fred Flintstone",
            email: "fflinstone@slaterockngravel.com",
            teams: 4,
            leagueWins: 2,
            userAvatar: "fredflintstonecharacter.jpg"
    },
    players: [
        {
            playerID: 1,
            name: "Henrik Lundqvist",
            position: "G",
            wins: 57,
            losses: 745,
            points: 23426
        },
        {
            playerID: 2,
            name: "Ron Hextall",
            position: "G",
            wins: 8595,
            losses: 456,
            points: 3457
        },
        {
            playerID: 3,
            name: "Wayne Gretzky",
            position: "C",
            wins: 285,
            losses: 2342,
            points: 2342342
        },
        {
            playerID: 4,
            name: "Sidney Crosby",
            position: "C",
            wins: 474,
            losses: 46,
            points: 43
        },
        {
            playerID: 5,
            name: "Mario Lemieux",
            position: "RW",
            wins: 45345,
            losses: 3453,
            points: 734
        },
        {
            playerID: 6,
            name: "Jaromir Jagr",
            position: "D",
            wins: 4354,
            losses: 34,
            points: 242
        },
        {
            playerID: 7,
            name: "Mark Messier",
            position: "C",
            wins: 234,
            losses: 63,
            points: 325
        },
        {
            playerID: 8,
            name: "Gordie Howe",
            position: "LW",
            wins: 9952,
            losses: 234,
            points: 16123
        },
        {
            playerID: 9,
            name: "Joe Sakic",
            position: "D",
            wins: 32463,
            losses: 345,
            points: 324634
        },
        {
            playerID: 10,
            name: "Adam Oates",
            position: "LW",
            wins: 345,
            losses: 84,
            points: 846
        }
    ],
    teamInformation: {
        teamName: "New York Rangers",
        createdOn: "10/29/2020",
        leagueName: "Honeyspot",
        leagueID: "6G4892F3",
        teamLogo: "hockey1_unsplash.jpg"
    },
    leagues: [
        {
            leagueID: 1,
            name: 'Typhoon Tigers',
            teams: 19,
            visibility: 'Public',
            seasonEndDate: '6/30/2021',
            joinable: true
        },
        {
            leagueID: 2,
            name: 'The Big Cheese',
            teams: 17,
            visibility: 'Private',
            seasonEndDate: '2/16/2021',
            joinable: false
        },
        {
            leagueID: 3,
            name: 'Gaming Gorillas',
            teams: 6,
            visibility: 'Public',
            seasonEndDate: '1/22/2021',
            joinable: true
        },
        {
            leagueID: 4,
            name: 'Zealous Zebras',
            teams: 13,
            visibility: 'Public',
            seasonEndDate: '3/19/2021',
            joinable: true
        },
        {
            leagueID: 5,
            name: 'Sneaky Squirrels',
            teams: 14,
            visibility: 'Public',
            seasonEndDate: '5/1/2021',
            joinable: true
        }
    ],
    leagueInformation: [
        {
            leagueID: 1,
            teamID: 1,
            teamName: "New York Rangers",
            userID: 1,
            userName: "Frank Sinatra",
            rank: 3,
            wins: 3,
            losses: 2
        },
        {
            leagueID: 1,
            teamID: 2,
            teamName: "Vancouver Canucks",
            userID: 2,
            userName: "George Kochera",
            rank: 1,
            wins: 5,
            losses: 0
        },
        {
            leagueID: 1,
            teamID: 3,
            teamName: "Chicago Blackhwaks",
            userID: 3,
            userName: "Wil Coiner",
            rank: 2,
            wins: 4,
            losses: 1
        },
        {
            leagueID: 1,
            teamID: 4,
            teamName: "Arizona Coyotes",
            userID: 4,
            userName: "Benedict Cumberbatch",
            rank: 4,
            wins: 3,
            losses: 1
        },
        {
            leagueID: 1,
            teamID: 5,
            teamName: "New York Islanders",
            userID: 5,
            userName: "He Who Shall Not Be Named",
            rank: 5,
            wins: 1,
            losses: 4
        }
    ],
    userLeagues: [
        {
            leagueID: 1,
            name: 'Typhoon Tigers',
            teams: 19,
            seasonEndDate: '6/30/2021',
            leader: "New York Rangers"
        },
        {
            leagueID: 2,
            name: 'The Big Cheese',
            teams: 14,
            seasonEndDate: '6/30/2021',
            leader: "New York Rangers"
        },
        {
            leagueID: 3,
            name: 'Where Is My Mind',
            teams: 11,
            seasonEndDate: '5/25/2021',
            leader: "New York Rangers"
        },
        {
            leagueID: 4,
            name: 'Yes Mam',
            teams: 8,
            seasonEndDate: '4/30/2021',
            leader: "New York Rangers"
        }
    ],
    userTeams: [
        {
            teamID: 1,
            teamName: "New York Rangers",
            rank: 1,
            win: 3,
            loss: 0,
            createdOn: "10/29/2020",
            leagueName: "Honeyspot",
            leagueID: "6G4892F3"
        },
        {
            teamID: 2,
            teamName: "Vancouver Canucks",
            rank: 1,
            win: 3,
            loss: 0,
            createdOn: "10/29/2020",
            leagueName: "What Now?",
            leagueID: "6G4892F3"
        },
        {
            teamID: 3,
            teamName: "Seattle Kraken",
            rank: 1,
            win: 3,
            loss: 0,
            createdOn: "10/29/2020",
            leagueName: "Oh Jeez",
            leagueID: "6G4892F3"
        },
        {
            teamID: 4,
            teamName: "Edmonton Oilers",
            rank: 1,
            win: 3,
            loss: 0,
            createdOn: "10/29/2020",
            leagueName: "Yep",
            leagueID: "6G4892F3"
        }
    ]
}