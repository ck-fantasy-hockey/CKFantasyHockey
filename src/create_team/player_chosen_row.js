export default class PlayerChosenRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player
        }
    }

    handleDeselectPlayer = () => {
        var player = this.state.player
        this.props.deselectPlayer(player)
    }

    render() {
        return <tr>
            <td>{this.state.player.playerID}</td>
            <td>{this.state.player.name}</td>
            <td>{this.state.player.position}</td>
            <td>{this.state.player.wins}</td>
            <td>{this.state.player.losses}</td>
            <td>{this.state.player.points}</td>
            <td><button className="btn" onClick={this.handleDeselectPlayer}>Remove</button></td>
        </tr>
    }
}