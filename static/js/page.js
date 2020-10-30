import TeamView from './team_view.js';
import DATA from '../json/data.js';

ReactDOM.render(React.createElement(TeamView, { data: DATA }), document.getElementById('root'));