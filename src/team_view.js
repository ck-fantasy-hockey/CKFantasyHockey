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
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const teamID = urlParams.get('teamID')
        const url = '/drop-player'

        this.setState({playerToDrop: {
            playerID,
            teamID,
            leagueID: this.state.leagueInfo.leagueID
        }})

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.playerToDrop)
        })
        .then((response) => response.json())
        .then(data => {
            if (data['response'] === true) {
                const token = localStorage.getItem('usertoken')
                window.location.href = (`/team-view?token=${token}&teamID=${teamID}`);
            }
        })
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