export default class PlayerSelectRow extends React.Component {
    render() {
        return <tr>
            <td>{this.props.playerID}</td>
            <td>{this.props.name}</td>
            <td>{this.props.position}</td>
            <td>{this.props.wins}</td>
            <td>{this.props.losses}</td>
            <td>{this.props.points}</td>
        </tr>
    }
}