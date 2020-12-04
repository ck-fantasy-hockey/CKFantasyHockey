import Players from './player_admin/players.js'
import PlayerInformation from './player_admin/player_information.js'
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
                <PlayerInformation />
                <Players data={this.state.players} />
            </div>
        </div>
    }
}

ReactDOM.render(
    <PlayerView />,
    document.getElementById('root')
  );