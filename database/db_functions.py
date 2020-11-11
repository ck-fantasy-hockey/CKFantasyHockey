import mysql.connector
import os

# Test function
def establish_connection():

    # Get the environment variables where sensitive logon information securely stored
    config = {
        'user': os.environ.get('DB_USER'),
        'password': os.environ.get('DB_PASSWORD'),
        'host': os.environ.get('DB_HOST'),
        'database': os.environ.get('DB_DATABASE')
        }
    if os.environ.get('FLASK_ENV') == 'production':
        config['ssl_disabled'] = True

    # Make the connection
    cnx = mysql.connector.connect(**config)
    cursor = cnx.cursor()
    query = "SELECT * FROM Players;"
    cursor.execute(query)
    cursor.fetchall()
    cursor.close()
    cnx.close()