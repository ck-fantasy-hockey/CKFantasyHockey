# CKFantasyFootball


## Project Directory Structure

Path | Description
-----|------------
/ | for `app.py` and `.gitignore`
/config | store any configuration files here for things like babel, database, etc.
/logs | output any logs here, can have subdirectories
/src | use this for storing react scripts, babel will compile from this directory
/static | serves static assets to the web page, subfolders by file type
/templates | home for jinja2 (j2) templates, flask needs this directory