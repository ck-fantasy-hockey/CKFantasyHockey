import data from '../../json/data.js'
import PlayerSelectRow from './player_select_row.js'

export default class PlayerSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            players: data.players
        }
    }
    render() {
        return <div className='player-select'>
            <div className='player-available'>
                <table>
                    <thead>
                    <tr>
                        <th>Player ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.players.map(element =>
                            <PlayerSelectRow key={element.playerID} {...element}/>
                            )}
                    </tbody>
                </table>
            </div>
            <div className='player-selected'>
                <table>
                    <thead>
                    <tr>
                        <th>Player ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                   </tbody>
                </table>
            </div>
        </div>
    }
}