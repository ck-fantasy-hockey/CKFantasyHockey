import Teams from './league/teams.js'
import LeagueInformation from './league/league_information.js'
import NavBar from './nav_bar.js'
import data from '../json/data.js'

// window.history.replaceState({}, document.title, "/league-view");

class LeagueView extends React.Component {
    render() {
        return <div className='background-filter'>
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