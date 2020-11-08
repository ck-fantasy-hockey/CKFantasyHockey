import mysql.connector
import os

# Test function
def establish_connection():

    # Get the environment variables where sensitive logon information securely stored
    if os.environ.get('FLASK_ENV') == 'DEVELOPMENT':
        config = {
        'user': os.environ.get('DB_USER'),
        'password': os.environ.get('DB_PASSWORD'),
        'host': os.environ.get('DB_HOST'),
        'database': os.environ.get('DB_DATABASE')
        }
    else:

        config = {
        'user': 'bcfa980b82b70c',
        'password': '7d8b0cdd',
        'host': 'us-cdbr-east-02.cleardb.com',
        'database': 'heroku_356a05812d22760',
        'ssl_disabled': True
        }

    # mysql://bcfa980b82b70c:7d8b0cdd@us-cdbr-east-02.cleardb.com/heroku_356a05812d22760?reconnect=true
    # Make the connection
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT * FROM Players;"
    cursor.execute(quer