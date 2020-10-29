from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def root():
    return render_template('index.j2')

if __name__ == '__main__':
    app.run(port=5000)