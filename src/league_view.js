import Teams from './league/teams.js'
import LeagueInformation from './league/league_information.js'
import NavBar from './nav_bar.js'
import data from '../json/data.js'

class LeagueView extends React.Component {
    render() {
        return <div>
            <NavBar />
            <div className='container'>
                <LeagueInformation data={data} />
                <Teams data={data} />
            </div>
        </div>
    }
}

ReactDOM.render(
    <LeagueView />,
    document.getElementById('root')
  );