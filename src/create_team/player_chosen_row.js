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
            <td>{this.state.player.playerName}</td>
            <td>{this.state.player.position}</td>
            <td>{this.state.player.goals}</td>
            <td>{this.state.player.assists}</td>
            <td>{this.state.player.points}</td>
            <td><button className="btn" onClick={this.handleDeselectPlayer}>Remove</button></td>
        </tr>
    }
}