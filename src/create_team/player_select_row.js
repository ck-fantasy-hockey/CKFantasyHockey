export default class PlayerSelectRow extends React.Component {
    constructor(props) {
        super(props);
        this.selectPlayer = this.selectPlayer.bind(this)
        console.log('PlayerSelectRow')
        this.state = {
            player: this.props.player
        }
    }
    

    selectPlayer(e) {
        e.preventDefault()
        console.log('You selected ' + this.props.playerID)
        this.props.addPlayer(this.props.playerID)
    }

    render() {
        return <tr>
            <td>{this.state.player.playerID}</td>
            <td>{this.state.player.name}</td>
            <td>{this.state.player.position}</td>
            <td>{this.state.player.wins}</td>
            <td>{this.state.player.losses}</td>
            <td>{this.state.player.points}</td>
            <td><button onClick={this.selectPlayer}>Select</button></td>
        </tr>
    }
}