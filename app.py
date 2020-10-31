from flask import Flask, render_template, request

app = Flask(__name__)

# Configuration

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Data Transportation

dataFromServer = {}

# Routes

@app.route('/')
def root():
    return render_template('index.j2', page="landing_page", dataFromServer=dataFromServer)

@app.route('/team-view')
def team_view():
    return render_template('index.j2', page="team_view", dataFromServer=dataFromServer)

@app.route('/join-league')
def join_team():
    return render_template('index.j2', page="join_league", dataFromServer=dataFromServer)

@app.route('/create-team')
def create_team():
    dataFromServer = {
        "leagueID": request.args.get('leagueID') 
        }
    return render_template('index.j2', page="create_team", dataFromServer=dataFromServer)

if __name__ == '__main__':
    app.run(port=5000)