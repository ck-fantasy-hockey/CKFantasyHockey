export default class PlayerRow extends React.Component {
    render() {
        return <tr>
            <td>{this.props.playerID}</td>
            <td>{this.props.playerName}</td>
            <td>{this.props.team}</td>
            <td>{this.props.status}</td>
            <td>{this.props.position}</td>
            <td>{this.props.goals}</td>
            <td>{this.props.assists}</td>
            <td>{this.props.points}</td>
            <td>{this.props.gameWinningGoals}</td>
            <td>{this.props.hatTricks}</td>
            <td>{this.props.penaltyMinutes}</td>
            <td>{this.props.pointsPerGame}</td>
            <td>{this.props.shootOutGoals}</td>
            <td>{this.props.minutesPlayed}</td>
            <td>{this.props.blocks}</td>
            <td>{this.props.wins}</td>
            <td>{this.props.losses}</td>
            <td>{this.props.playerID}</td>
            <td>{this.props.overtimeLosses}</td>
        </tr>
    }
}