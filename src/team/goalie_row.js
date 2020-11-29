import PlayerFunctions from "./player_functions.js";

export default class GoalieRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <tr>
            <td>{this.props.playerName}</td>
            <td>{this.props.team}</td>
            <td>{this.props.status}</td>
            <td>{this.props.playerID}</td>
            <td>{this.props.position}</td>
            <td>{this.props.gamesPlayed}</td>
            <td>{this.props.goals}</td>
            <td>{this.props.assists}</td>
            <td>{this.props.points}</td>
            <td>{this.props.wins}</td>
            <td>{this.props.losses}</td>
            <td>{this.props.overtimeLosses}</td>
            <td>{this.props.shutOuts}</td>
            <td>{this.props.goalsAllowedAverage}</td>
            <td>{this.props.goalsAllowed}</td>
            <td>{this.props.saves}</td>
            <td>{this.props.savePercentage}</td>
            <td>{this.props.minutesPlayed}</td>
            <td>                
                <PlayerFunctions {...this.props} />
            </td>
        </tr>
    }
}