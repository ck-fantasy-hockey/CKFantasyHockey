import TeamView from './team_view.js'
import DATA from '../json/data.json'

const data = JSON.parse(DATA)

ReactDOM.render(
    <TeamView data={data} />,
    document.getElementById('root')
  );