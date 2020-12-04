import Players from './league/teams.js'
import PlayerInformation from './league/league_information.js'
import NavBar from './nav_bar.js'

class PlayerView extends React.Component {
    constructor() {
        super();
        this.state = dataFromServer;
        console.log(this.state)
    }

    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <PlayerInformation data={this.state.leaguedata} />
                <Players data={this.state.teamdata} />
            </div>
        </div>
    }
}

ReactDOM.render(
    <PlayerView />,
    document.getElementById('root')
  );