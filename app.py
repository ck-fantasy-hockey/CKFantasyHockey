from flask import Flask, render_template, request

app = Flask(__name__)

# Configuration

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Data Transportation

dataFromServer = {}

# Routes

@app.route('/')
def root():
    return render_template('index.j2', page="landing_page", css="style", dataFromServer=dataFromServer)

@app.route('/team-view')
def team_view():
    return render_template('index.j2', page="team_view", css="style", dataFromServer=dataFromServer)

@app.route('/join-league')
def join_team():
    return render_template('index.j2', page="join_league", css="style", dataFromServer=dataFromServer)

@app.route('/create-team')
def create_team():
    dataFromServer = {
        "leagueID": request.args.get('leagueID') 
        }
    return render_template('index.j2', page="create_team", css="style", dataFromServer=dataFromServer)

@app.route('/signup')
def signup():
    return render_template('index.j2', page="signup", css="signup_login", dataFromServer=dataFromServer)

@app.route('/login')
def login():
    return render_template('index.j2', page="login", css="signup_login", dataFromServer=dataFromServer)

if __name__ == '__main__':
    app.run(port=5000)