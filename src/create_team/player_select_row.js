export default class PlayerSelectRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player
        }
    }

    handleSelectPlayer = () => {
        var player = this.state.player
        this.props.selectPlayer(player)
    }

    render() {
        return <tr>
            <td>{this.state.player.playerID}</td>
            <td>{this.state.player.name}</td>
            <td>{this.state.player.position}</td>
            <td>{this.state.player.wins}</td>
            <td>{this.state.player.losses}</td>
            <td>{this.state.player.points}</td>
            <td><button className="btn" onClick={this.handleSelectPlayer}>Select</button></td>
        </tr>
    }
}