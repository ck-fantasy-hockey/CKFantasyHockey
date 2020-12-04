export default class PlayerRow extends React.Component {
    render() {
        return <tr>
            <td>{this.props.playerID}</td>
            <td>{this.props.playerName}</td>
            <td>{this.props.team}</td>
            <td>{this.props.status}</td>
            <td>{this.props.position}</td>
            <td>{this.props.gamesPlayed}</td>
            <td>{this.props.goals}</td>
            <td>{this.props.assists}</td>
            <td>{this.props.points}</td>
            <td>{this.props.gameWinningGoals}</td>
            <td>{this.props.penaltyMinutes}</td>
            <td>{this.props.minutesPlayed}</td>
            <td>{this.props.blocks}</td>
            {/* <td><button className="player_button">Update</button><button className="player_button">Delete</button></td> */}
        </tr>
    }
}