import LeagueRow from './league_row.js'

export default class LeagueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagues: dataFromServer.leagues,
            modalVisible: false,
            modalStyle: {
                display: 'none'
            },
            modalInformation: {
                leagueName: '',
                visibility: 'private'
            }
        }
    }

    updateLeagueName = (e) => {
        this.setState({modalInformation:{
            leagueName: e.target.value,
            visibility: this.state.modalInformation.visibility
        }})
    }

    updateLeagueVisibility = (e) => {
        this.setState({modalInformation: {
            leagueName: this.state.modalInformation.leagueName,
            visibility: e.target.value
        }})
    }

    displayModal = () => {
        this.setState({modalVisible: !this.state.modalVisible});
        if (this.state.modalStyle.display === 'none') {
            this.setState({modalStyle: {display : 'block'}})
        } else {
            this.setState({modalStyle: {display : 'none'}})
        }
    }

    handleNewLeague = (e) => {
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
                 window.location.href = '/join-league';
             }
         })
    }

    render() {
        return <div className='roster'>
        <div className='roster-title'>
            <h2>Leagues</h2>
        </div>
        <div className='roster-functions'>
            <button id='new-league-button' onClick={this.displayModal} className='btn'>Create New League</button>
        </div>
        <div id='new-league-modal' style={this.state.modalStyle} className='modal'>
            <div className='modal-content'>
                <form>
                    <label>Team Name</label>
                    <input type='text' onChange={this.updateLeagueName}></input>
                    <label>Private</label>
                    <input type='radio' defaultChecked={true} onChange={this.updateLeagueVisibility} name='visibility' value='private'></input>
                    <label>Public</label>
                    <input type='radio' onChange={this.updateLeagueVisibility} name='visibility' value='public'></input>
                </form>
                <button onClick={this.displayModal}>Cancel</button>
                <button onClick={this.handleNewLeague}>Submit</button>
            </div>
        </div>
        
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Teams</th>
                <th>Visibility</th>
                <th>Season Ends</th>
                <th>Functions</th>
            </tr>
        </thead>
        <tbody>
            {this.state.leagues.map(element =>
                <LeagueRow key={element.leagueID} {...element}/>
                )}
        </tbody>
    </table>
    <div className='roster-instructions'>
        <p>View the all leagues above and click 'JOIN' on a league you wish to create a team in.</p>
    </div>
    </div>;
    }
}