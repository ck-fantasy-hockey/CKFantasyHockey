# CKFantasyHockey
### Developed By: William Coiner and George Kochera

CKFantasyFootball is a full-stack web application that is a platform for Fantasy Hockey. The front-end is built purely from React.js. The backend will be built using Flask and MySQL.

## Getting Running

Helpful link for the first section: https://reactjs.org/docs/add-react-to-a-website.html#optional-try-react-with-jsx
* Install Node.js and npm
* Install babel using npm 

The rest is Python
* Install Python 3
* Intall Flask
  * `pip3 install flask`

To run the project
* Navigate to project folder
* `flask run`

Project will be served on http://localhost:5000

Ensure that you use the `--watch` switch when running babel (see the React page linked) so that when you make changes in the React JavaScript files, they're transpiled in realtime.

## Project Directory Structure

Path | Description
-----|------------
/ | for `app.py` and `.gitignore`
/config | store any configuration files here for things like babel, database, etc.
/logs | output any logs here, can have subdirectories
/src | use this for storing react scripts, babel will compile from this directory
/static | serves static assets to the web page, subfolders by file type
/templates | home for jinja2 (j2) templates, flask needs this directory

## Up-To-Date Notes

- Using React.js, everything compiles out of the `src` directory. The structure there upon compilation, will be placed in `/static/js`.
- `page.js` is the top level React document. Ideally, everything in the React app should be served with that as the top level. Consider: *react-router* or serving different top level React files via Flask routes.
- `static/json` has one js file in it. It is a giant JavaScript object pretends to be a data source for the React app. You can add stateful information here to use in the web app.
- Within `src`, files are broken up by "page", so there is `src\team` and there likely could be others to modularize the app directory structure and keep things tidy.
  
## Dependencies

- Node.js/NPM
  - Babel
  
- Python
  - Flask

## Routes

Path | Description | Targets
-----|-------------|---------
/ | homepage | `landing_page.js`
/join_league | Area to join a new league and establish a new team. | `join_league.js`
/team_view | Area to view the team roster (and possibly later make changes) | `team_view.js`