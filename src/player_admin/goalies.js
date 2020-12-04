import GoalieRow from './goalie_row.js'
export default class Goalies extends React.Component {
    constructor(props) {
        super(props);
    }

    sortByRank = () => {
        this.state.teams.sort((a, b) => (a.rank < b.rank) ? -1: 1)
    }

    render() {
        return <div className='roster'>
            <div className='roster-title'>
                <h2>Goalies</h2>
            </div>
            
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Position</th>
                    <th>Games Played</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Shutouts</th>
                    <th>GAA</th>
                    <th>S%</th>

                    {/* <th>Update/Delete</th> */}
                </tr>
            </thead>
            <tbody>
                {this.props.data.filter(player => player.position == 'Goalie').map(element =>
                    <GoalieRow key={element.playerID} {...element}/>
                    )}
            </tbody>
        </table>
        </div>;
    }
}