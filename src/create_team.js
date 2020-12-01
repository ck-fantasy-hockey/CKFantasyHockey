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
                deselectPlayer: this.deselectPlayer,
                handleNewTeam: this.handleNewTeam
            },
            data: {
                teamName: '',
                leagueID: dataFromServer.leagueID,
                players: dataFromServer.players,
                playersSelected: [],
                playersNotSelected: dataFromServer.players,
                token: localStorage.getItem('usertoken')
            },
            error: {
                style: {
                    display: 'hidden'
                },
                message: ""
            }
        }
    }

    selectPlayer = (player) => {
        
        this.setState(state => {

            const data = Object.assign({}, state.data)

            const playersNotSelected = data.playersNotSelected.filter(p => p.playerID !== player.playerID)
            data.playersNotSelected = playersNotSelected.sort((a, b) => (a.playerID > b.playerID) ? 1 : -1)

            const playersSelected = data.playersSelected.concat(player);
            data.playersSelected = playersSelected.sort((a, b) => (a.playerID > b.playerID) ? 1 : -1)

            return { data }
        })
    }

    deselectPlayer = (player) => {

        this.setState(state => {

            const data = Object.assign({}, state.data)
            
            const playersNotSelected = data.playersNotSelected.concat(player)
            data.playersNotSelected = playersNotSelected.sort((a, b) => (a.playerID > b.playerID) ? 1 : -1)
            
            const playersSelected = data.playersSelected.filter(p => p.playerID !== player.playerID)
            data.playersSelected = playersSelected.sort((a, b) => (a.playerID > b.playerID) ? 1 : -1)

            return { data }
        })
    }

    updatePlayers = (e) => {
        this.setState(prevState => {
            let players = Object.assign({}, prevState.data.players);
            players = e.taget.value;
            return { players }
        })
    }

    updateTeamName = (e) => {
        this.setState(prevState => {
            let data = Object.assign({}, prevState.data);
            data.teamName = e.target.value;
            return { data }
        })
    }

    handleNewTeam = (e) => {
        e.preventDefault()
        const teamInfo = this.state.data
        const url = '/add-new-team'

        if (teamInfo.teamName === '') {
            this.setState(prevState => {
                const error = Object.assign({}, prevState.error);
                console.log(error)
                error.message = 'You must enter a team name.'
                return { error }
            })
        } else {

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(teamInfo)
            })
            .then((response) => response.json())
            .then(data => {
                if (data['response'] === true) {
                    window.location.href = ('/dashboard?token=' + localStorage.getItem('usertoken'));

                } else {
                    this.setState(prevState => {
                        const error = Object.assign({}, prevState.error);
                        console.log(error)
                        error.message = 'Team name taken.'
                        return { error }
                    })
                }
            })
        }
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

