import { abbreviate } from '../utilities/string.js'
export default class PlayerSelectRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player
        }
        this.abbreviate = abbreviate.bind(this)
    }

    handleSelectPlayer = () => {
        var player = this.state.player
        this.props.selectPlayer(player)
    }

    render() {
        return <tr>
            <td className='hide-on-sm-and-down'>{this.state.player.playerID}</td>
            <td>{this.state.player.playerName}</td>
            <td>{this.abbreviate(this.state.player.position)}</td>
            <td>{this.state.player.goals}</td>
            <td className='hide-on-sm-and-down'>{this.state.player.assists}</td>
            <td className='hide-on-sm-and-down'>{this.state.player.points}</td>
            <td><button className="btn" onClick={this.handleSelectPlayer}>Select</button></td>
        </tr>
    }
}