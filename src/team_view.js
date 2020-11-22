import Roster from './team/roster.js'
import TeamInformation from './team/team_information.js'
import NavBar from './nav_bar.js'
import data from '../json/data.js'

window.history.replaceState({}, document.title, "/team-view");

class TeamView extends React.Component {
    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <TeamInformation data={data} />
                <Roster data={data} />
            </div>
        </div>
    }
}

ReactDOM.render(
    <TeamView />,
    document.getElementById('root')
  );