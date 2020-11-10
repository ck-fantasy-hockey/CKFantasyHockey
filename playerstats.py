import requests

# NHL Stats API

def pull_roster():
    """Pulls list of player ids from each team"""
    roster_list = []
    count = 0
    # Iterates through all teams
    for i in range(1,39):
        response = requests.get('https://statsapi.web.nhl.com/api/v1/teams/' + str(i) + "/roster")
        roster = response.json()
        # Handling bad data
        if 'messageNumber' in roster:
            continue
        # Pulling id of every player
        for player in roster['roster']:
            count += 1
            roster_list.append(player['person']['id'])
    print(count)
    return roster_list

def pull_player_stats():
    player_ids = pull_roster()
    player_stats = []
    # Iterates every player and pulls 2019-2020 stats
    for id in player_ids:
        response = requests.get('https://statsapi.web.nhl.com/api/v1/people/' + str(id) + '/stats?stats=statsSingleSeason&season=20192020')
        player = response.json()
        player_stats.append(player)
    return player_stats