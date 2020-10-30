import TeamView from './team_view.js';
import DATA from '../json/data.json';

var data = JSON.parse(DATA);

ReactDOM.render(React.createElement(TeamView, { data: data }), document.getElementById('root'));