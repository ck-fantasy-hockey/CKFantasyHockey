import TeamView from './team_view.js'
import DATA from '../json/data.js'

ReactDOM.render(
    <TeamView data={DATA} />,
    document.getElementById('root')
  );