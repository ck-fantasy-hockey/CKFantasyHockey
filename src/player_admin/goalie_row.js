export default class GoalieRow extends React.Component {
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
            <td>{this.props.shutOuts}</td>
            <td>{this.props.goalsAllowedAverage}</td>
            <td>{this.props.savePercentage}</td>
            {/* <td><button className="player_button">Update</button><button className="player_button">Delete</button></td> */}
        </tr>
    }
}