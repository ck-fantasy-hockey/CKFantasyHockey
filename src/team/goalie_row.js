import PlayerFunctions from "./player_functions.js";

export default class GoalieRow extends React.Component {
    render() {
        return <tr>
            <td>{this.props.name}</td>
            <td>-</td>
            <td>-</td>
            <td>{this.props.playerID}</td>
            <td>{this.props.position}</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>                
                <PlayerFunctions />
            </td>
        </tr>
    }
}