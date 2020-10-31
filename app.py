from flask import Flask, render_template, request

app = Flask(__name__)

# Configuration

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Routes

@app.route('/')
def root():
    return render_template('index.j2', page="landing_page")

@app.route('/team-view')
def team_view():
    return render_template('index.j2', page="team_view")

@app.route('/join-league')
def join_team():
    return render_template('index.j2', page="join_league")

@app.route('/signup')
def signup():
    return render_template('index.j2', page="signup", css="signup_login")

@app.route('/login')
def login():
    return render_template('index.j2', page="login", css="signup_login")

if __name__ == '__main__':
    app.run(port=5000)