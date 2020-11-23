
import PlayerSelectRow from './player_select_row.js'
import PlayerChosenRow from './player_chosen_row.js'

export default class PlayerSelect extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='roster'>
        <div className='roster-title'>
            <h2>Player Select</h2>
        </div>
        <div className='roster-main'>
            <div className='roster-left'>
                    <div className='roster-section'>Available</div>
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
                                    {this.props.playersNotSelected.map(element =>
                                        <PlayerSelectRow key={element.playerID} selectPlayer={this.props.functions.selectPlayer} player={element}/>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            <div className='roster-center'>
                <div className='roster-section'></div>
                <div className='spacer'></div>
            </div>
            <div className='roster-right'>
                <div className='roster-section'>Selected</div>
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
                            <th>Selected</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.playersSelected.map(element =>
                                <PlayerChosenRow key={element.playerID} deselectPlayer={this.props.functions.deselectPlayer} player={element}/>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className='roster-instructions'>
            <p>Pick a player on the left, and it gets added to the table on the right to compose your team.</p>
        </div>
        </div>
    }
}