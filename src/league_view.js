// import Roster from './team/roster.js'
// import TeamInformation from './team/team_information.js'
import NavBar from './nav_bar.js'
import data from '../json/data.js'

class LeagueView extends React.Component {
    render() {
        return <div>
            <NavBar />
            <div className='container'>
                {/* <TeamInformation data={data} />
                <Roster data={data} /> */}
            </div>
        </div>
    }
}

ReactDOM.render(
    <LeagueView />,
    document.getElementById('root')
  );