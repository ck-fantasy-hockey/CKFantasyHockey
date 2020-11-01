export default class TeamRow extends React.Component {
    render() {
        return <tr>
            <td>{this.props.rank}</td>
            <td>{this.props.teamID}</td>
            <td>{this.props.teamName}</td>
            <td>{this.props.userName}</td>
            <td>{this.props.wins}</td>
            <td>{this.props.losses}</td>
        </tr>
    }
}