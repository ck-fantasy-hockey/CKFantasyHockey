# CKFantasyFootball
### Developed By: William Coiner and George Kochera


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