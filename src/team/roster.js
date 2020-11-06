import PlayerRow from './player_row.js'
import GoalieRow from './goalie_row.js'
export default class Roster extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            players: this.props.data.players
        }
    }

    render() {
        return <div className='roster'>
            <div className='roster_title'>
                <h2>Roster</h2>
            </div>
            <div className='roster-section'>
                <span>Players</span>
            </div>
            <div className='player-table'>
            <table>
            <thead>
                <tr>
                    <th><div className="tooltip"><span className="tooltiptext">Name</span>Name</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">NHL Team</span>NHL Team</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Status</span>Status</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Player ID</span>ID</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Position</span>POS</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Games Played</span>GP</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Goals</span>G</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Assists</span>A</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Points</span>P</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Shootout Goals</span>SHG</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Hat Tricks</span>HT</div></th>
                    <th>+/-</th>
                    <th><div className="tooltip"><span className="tooltiptext">Points Per Game</span>PPG</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Shorthanded Goals</span>SHG</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Penalty Minutes</span>PIM</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Blocks</span>B</div></th>
                    <th className="player-functions"></th>
                </tr>
            </thead>
            <tbody>
            {this.state.players.map(element =>
                    { if (element.position !== "G") 
                    return <PlayerRow key={element.playerID} {...element}/>
                    }
                    )}
            </tbody>
        </table>
        </div>
        <div className='roster-section'>
            <span>Goalies</span>
        </div>
        <div className='goalie-table'>
        <table>
            <thead>
                <tr>
                    <th><div className="tooltip"><span className="tooltiptext">Name</span>Name</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">NHL Team</span>NHL Team</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Status</span>Status</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Player ID</span>ID</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Position</span>POS</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Games Played</span>GP</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Goals</span>G</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Assists</span>A</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Points</span>P</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Wins</span>W</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Losses</span>L</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Overtime Losses</span>OTL</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Shutouts</span>SHO</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Goals Allowed Average</span>GAA</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Goals Allowed</span>GA</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Saves</span>S</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Save Percentage</span>S%</div></th>
                    <th><div className="tooltip"><span className="tooltiptext">Minutes Played</span>MIP</div></th>
                    <th className="player-functions"></th>
                </tr>
            </thead>
            <tbody>
                {this.state.players.map(element =>
                    { if (element.position === "G") 
                    return <GoalieRow key={element.playerID} {...element}/>
                    }
                    )}
            </tbody>
        </table>
        </div>
        </div>;
    }
}