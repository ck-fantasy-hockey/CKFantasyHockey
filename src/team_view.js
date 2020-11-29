import Roster from './team/roster.js'
import TeamInformation from './team/team_information.js'
import NavBar from './nav_bar.js'

class TeamView extends React.Component {
    constructor(props) {
        super(props)
        this.state = dataFromServer
        this.state.functions = {
            dropPlayer: this.dropPlayer
        }    
    }
    

    dropPlayer = (playerID) => {
        console.log(playerID)
    }

    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <TeamInformation {...this.state} />
                <Roster {...this.state} />
            </div>
        </div>
    }
}

ReactDOM.render(
    <TeamView />,
    document.getElementById('root')
  );