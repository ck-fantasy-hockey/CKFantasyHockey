from flask import Flask, render_template, request

app = Flask(__name__)

# Configuration

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Routes

@app.route('/')
def root():
    return render_template('index.j2')

@app.route('/signup')
def signup():
    return render_template('signup.j2')

if __name__ == '__main__':
    app.run(port=5000)