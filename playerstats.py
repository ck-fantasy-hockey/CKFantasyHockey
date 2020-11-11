import requests

# NHL Stats API

# Pulls list of player ids from each team
def pull_roster():
    roster_list = []
    count = 0
    # Iterates through all teams
    for i in range(1,3):
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

# Pulls team for each player
def pull_player_team():
    player_ids = pull_roster()
    player_stats = []
    for id in player_ids:
        response = requests.get('https://statsapi.web.nhl.com/api/v1/people/' + str(id))
        player = response.json()
        player_name = player['people'][0]['fullName']
        player_team = player['people'][0]['currentTeam']['name']
        player_pos = player['people'][0]['primaryPosition']['name']
        player_info = {'id': id, 'name': player_name, 'team': player_team, 'position': player_pos, 'stats': None}
        player_stats.append(player_info)
    return {'ids': player_ids, 'stats': player_stats}

# Pulls single year stats for each player
def pull_player_stats():
    player_data = pull_player_team()
    player_stats = player_data['stats']
    player_ids = player_data['ids']
    # Iterates every player and pulls 2019-2020 stats
    for i in range(len(player_ids)):
        response = requests.get('https://statsapi.web.nhl.com/api/v1/people/' + str(player_ids[i]) + '/stats?stats=statsSingleSeason&season=20192020')
        player = response.json()
        if not player['stats'][0]['splits']:
            continue
        stats = player['stats'][0]['splits'][0]['stat']
        player_stats[i]['stats'] = stats
    return player_stats