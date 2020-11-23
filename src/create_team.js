import NavBar from './nav_bar.js'
import TeamAttributes from './create_team/team_attributes.js'
import PlayerSelect from './create_team/player_select.js'
import data from './../json/data.js'


class CreateTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            functions: {
                updateTeamName: this.updateTeamName,
                updatePlayers: this.updatePlayers,
                selectPlayer: this.selectPlayer,
                deselectPlayer: this.deselectPlayer
            },
            teamName: '',
            leagueID: dataFromServer.leagueID,
            players: data.players,
            playersSelected: [],
            playersNotSelected: data.players


        }
    }

    selectPlayer = (player) => {
        
        this.setState(state => {
            const players = this.state.players

            const playersNotSelected = state.playersNotSelected.filter(p => p.playerID !== player.playerID)
            playersNotSelected.sort((a, b) => (a.playerID > b.playerID) ? 1 : -1)

            const playersSelected = state.playersSelected.concat(player);
            playersSelected.sort((a, b) => (a.playerID > b.playerID) ? 1 : -1)

            return {
                players,
                playersSelected,
                playersNotSelected
            }
        })
    }

    deselectPlayer = (player) => {

        this.setState(state => {
            const players = this.state.players
            
            const playersNotSelected = state.playersNotSelected.concat(player)
            playersNotSelected.sort((a, b) => (a.playerID > b.playerID) ? 1 : -1)
            
            const playersSelected = state.playersSelected.filter(p => p.playerID !== player.playerID)
            playersSelected.sort((a, b) => (a.playerID > b.playerID) ? 1 : -1)

            return {
                players,
                playersSelected,
                playersNotSelected
            }
        })
    }

    updatePlayers = (e) => {
        this.setState(prevState => {
            let players = Object.assign({}, prevState.players);
            players = e.taget.value;
            return { players }
        })
    }

    updateTeamName = (e) => {
        this.setState(prevState => {
            let teamName = Object.assign({}, prevState.teamName);
            teamName = e.target.value;
            return { teamName }
        })
    }

    handleNewTeam = (e) => {
        e.preventDefault()
        const leagueInfo = this.state.modalInformation
        const url = '/add-new-league'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leagueInfo)
         })
         .then((response) => response.json())
         .then(data => {
             if (data['response'] === true) {
                 window.location.href = ('/join-league?token=' + localStorage.getItem('usertoken'));

             }
         })
    }



    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <TeamAttributes {...this.state} />
                <PlayerSelect {...this.state}/>
            </div> 
        </div> 
    }
}

ReactDOM.render(
    <CreateTeam />,
    document.getElementById('root')
    );

