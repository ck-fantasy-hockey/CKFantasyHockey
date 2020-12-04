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
                    <th>GWG</th>
                    <th>P/M</th>
                    <th>Min Played</th>
                    <th>Blocks</th>
                    {/* <th>Update/Delete</th> */}
                </tr>
            </thead>
            <tbody>
                {this.props.data.map(element =>
                    <PlayerRow key={element.playerID} {...element}/>
                    )}
            </tbody>
        </table>
        </div>;
    }
}