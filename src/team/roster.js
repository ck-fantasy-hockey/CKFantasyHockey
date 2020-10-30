import RosterRow from './roster_row.js'
export default class Roster extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data.players
    }

    render() {
        return <table>
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
        </table>;
    }
}