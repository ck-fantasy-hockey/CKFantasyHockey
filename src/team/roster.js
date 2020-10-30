import RosterRow from './roster_row.js'
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
                    <RosterRow key={element.playerID} {...element}/>
                    )}
            </tbody>
        </table>
        </div>;
    }
}