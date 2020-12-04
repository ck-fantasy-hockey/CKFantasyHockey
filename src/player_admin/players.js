import PlayerRow from './player_row.js'
export default class Players extends React.Component {
    constructor(props) {
        super(props);
    }

    sortByRank = () => {
        this.state.teams.sort((a, b) => (a.rank < b.rank) ? -1: 1)
    }

    render() {
        // this.sortByRank();
        return <div className='roster'>
            <div className='roster-title'>
                <h2>Teams</h2>
            </div>
            
            <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Team ID</th>
                    <th>Name</th>
                    <th>User</th>
                    <th>Wins</th>
                    <th>Losses</th>
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