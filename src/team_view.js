import Roster from './team/roster.js'
import TeamInformation from './team/team_information.js'
import NavBar from './nav_bar.js'

class TeamView extends React.Component {
    constructor(props) {
        super(props)
        this.state = dataFromServer
        this.state.modifiedTeamInfo = {
            seasonEnds: null,
            teamName: null
        }
        this.state.functions = {
            dropPlayer: this.dropPlayer,
            updateTeamName: this.updateTeamName,
            updateSeasonEnds: this.updateSeasonEnds,
            commitUpdateTeamAttributes: this.commitUpdateTeamAttributes
        }    
    }

    updateTeamName = (event) => {
        this.setState(state => {
            const newState = Object.assign({}, state)
            newState.modifiedTeamInfo.teamName = event.target.value
            return { newState }
        })
    }

    updateSeasonEnds = (newValue) => {
        this.setState(state => {
            const newState = Object.assign({}, state)
            newState.modifiedTeamInfo.seasonEnds = newValue
            return { newState }
        })
    }

    commitUpdateTeamAttributes = () => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const teamID = parseInt(urlParams.get('teamID'))
        const url = '/update-team-attributes'

        const teamAttributesToUpdate = {...this.state.modifiedTeamInfo}
        teamAttributesToUpdate.teamID = teamID

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teamAttributesToUpdate)
        })
        .then((response) => response.json())
        .then(data => {
            if (data['response'] === true) {
                const token = localStorage.getItem('usertoken')
                window.location.href = (`/team-view?token=${token}&teamID=${teamID}`);
            }
        })


    }

    dropPlayer = (playerID) => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const teamID = parseInt(urlParams.get('teamID'))
        const url = '/drop-player'

        const playerToDrop = {
            playerID,
            teamID,
            leagueID: this.state.leagueInfo.leagueID
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerToDrop)
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