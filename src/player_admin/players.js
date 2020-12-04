import PlayerRow from './player_row.js'
export default class Players extends React.Component {
    constructor(props) {
        super(props);
    }

    sortByRank = () => {
        this.state.teams.sort((a, b) => (a.rank < b.rank) ? -1: 1)
    }

    render() {
        return <div className='roster'>
            <div className='roster-title'>
                <h2>Players</h2>
            </div>
            
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Position</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Points</th>
                    <th>Game Winning Goals</th>
                    <th>Hat Tricks</th>
                    <th>Plus Minus</th>
                    <th>PPG</th>
                    <th>SHG</th>
                    <th>Penalty Min</th>
                    <th>Blocks</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Overtime Losses</th>
                </tr>
            </thead>
            <tbody>
                {this.props.data.map(element =>
                    <PlayerRow key={element[0]} {...element}/>
                    )}
            </tbody>
        </table>
        </div>;
    }
}