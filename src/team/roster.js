import PlayerRow from './player_row.js'
import GoalieRow from './goalie_row.js'
export default class Roster extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return <div className='roster'>
            <div className='roster-title'>
                <h2>Roster</h2>
            </div>
            <div className='roster-section'>
                <span>Players</span>
            </div>
            <div className='player-table'>
            <table>
            <thead>
                <tr>
                    <th className='wide'><div className="tooltip"><span className="tooltiptext">Name</span>Name</div></th>
                    <th className='wide hide-on-sm-and-down'><div className="tooltip"><span className="tooltiptext">NHL Team</span>NHL Team</div></th>
                    <th className='wide hide-on-med-and-down'><div className="tooltip"><span className="tooltiptext">Status</span>Status</div></th>
                    <th className='narrow hide-on-med-and-down'><div className="tooltip"><span className="tooltiptext">Player ID</span>ID</div></th>
                    <th className='narrow hide-on-sm-and-down'><div className="tooltip"><span className="tooltiptext">Position</span>POS</div></th>
                    <th className='narrow hide-on-med-and-down'><div className="tooltip"><span className="tooltiptext">Games Played</span>GP</div></th>
                    <th className='narrow hide-on-sm-and-down'><div className="tooltip"><span className="tooltiptext">Goals</span>G</div></th>
                    <th className='narrow hide-on-sm-and-down'><div className="tooltip"><span className="tooltiptext">Assists</span>A</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Points</span>P</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Shootout Goals</span>SHG</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Hat Tricks</span>HT</div></th>
                    <th className='narrow hide-on-med-and-down'>+/-</th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Points Per Game</span>PPG</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Shorthanded Goals</span>SHG</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Penalty Minutes</span>PIM</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Blocks</span>B</div></th>
                    <th className='wide player-functions'></th>
                </tr>
            </thead>
            <tbody>
            {this.props.players.map(element =>
                    { if (element.position !== "Goalie") 
                    return <PlayerRow key={element.playerID} {...element} functions={this.props.functions}/>
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
                    <th className='wide'><div className="tooltip"><span className="tooltiptext">Name</span>Name</div></th>
                    <th className='wide hide-on-sm-and-down'><div className="tooltip"><span className="tooltiptext">NHL Team</span>NHL Team</div></th>
                    <th className='wide hide-on-med-and-down'><div className="tooltip"><span className="tooltiptext">Status</span>Status</div></th>
                    <th className='narrow hide-on-med-and-down'><div className="tooltip"><span className="tooltiptext">Player ID</span>ID</div></th>
                    <th className='narrow hide-on-sm-and-down'><div className="tooltip"><span className="tooltiptext">Games Played</span>GP</div></th>
                    <th className='narrow hide-on-med-and-down'><div className="tooltip"><span className="tooltiptext">Goals</span>G</div></th>
                    <th className='narrow hide-on-med-and-down'><div className="tooltip"><span className="tooltiptext">Assists</span>A</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Points</span>P</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Wins</span>W</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Losses</span>L</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Overtime Losses</span>OTL</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Shutouts</span>SHO</div></th>
                    <th className='narrow hide-on-sm-and-down'><div className="tooltip"><span className="tooltiptext">Goals Allowed Average</span>GAA</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Goals Allowed</span>GA</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Saves</span>S</div></th>
                    <th className='narrow hide-on-sm-and-down'><div className="tooltip"><span className="tooltiptext">Save Percentage</span>S%</div></th>
                    <th className='narrow hide-on-lg-and-down'><div className="tooltip"><span className="tooltiptext">Minutes Played</span>MIP</div></th>
                    <th className='wide player-functions'></th>
                </tr>
            </thead>
            <tbody>
                {this.props.players.map(element =>
                    { if (element.position === "Goalie") 
                    return <GoalieRow key={element.playerID} {...element} functions={this.props.functions}/>
                    }
                    )}
            </tbody>
        </table>
        </div>
        </div>;
    }
}