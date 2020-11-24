import Teams from './league/teams.js'
import LeagueInformation from './league/league_information.js'
import NavBar from './nav_bar.js'

// window.history.replaceState({}, document.title, "/league-view");

class LeagueView extends React.Component {
    constructor() {
        super();
        this.state = dataFromServer;
        console.log(this.state)
    }

    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <LeagueInformation data={this.state.leaguedata} />
                <Teams data={this.state.teamdata} />
            </div>
        </div>
    }
}

ReactDOM.render(
    <LeagueView />,
    document.getElementById('root')
  );