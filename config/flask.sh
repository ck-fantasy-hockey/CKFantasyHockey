source ./CKFH_venv/bin/activate
export DB_HOST=$(awk '/nameserver/ { print $2 }' /etc/resolv.conf)
flask run