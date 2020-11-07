import data from '../../json/data.js'
import PlayerSelectRow from './player_select_row.js'

export default class PlayerSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: data.players,
            players_selected: []
        }
    }


    render() {
        return <div className='roster'>
            <div className='roster-title'>
            <h2>Player Select</h2>
            </div>
            <div className='player-select'>
            <div className='roster player-available'>
                <table>
                    <thead>
                    <tr>
                        <th>Player ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Points</th>
                        <th>Select</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.players.map(element =>
                            <PlayerSelectRow key={element.playerID} player={element}/>
                            )}
                    </tbody>
                </table>
            </div>
            <div className='spacer'></div>
            <div className='roster player-selected'>
                <table>
                    <thead>
                    <tr>
                        <th>Player ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Points</th>
                        <th>Selected</th>
                    </tr>
                    </thead>
                    <tbody>
                   </tbody>
                </table>
            </div>
        </div>
        <div className='roster-instructions'>
            <p>Pick a player on the left, and it gets added to the table on the right to compose your team.</p>
        </div>
        </div>
    }
}