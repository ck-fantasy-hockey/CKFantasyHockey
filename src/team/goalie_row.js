import PlayerFunctions from "./player_functions.js";

export default class GoalieRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <tr>
            <td>{this.props.playerName}</td>
            <td className='hide-on-sm-and-down'>{this.props.team}</td>
            <td className='hide-on-med-and-down'>{this.props.status}</td>
            <td className='hide-on-med-and-down'>{this.props.playerID}</td>
            <td className='hide-on-sm-and-down'>{this.props.gamesPlayed}</td>
            <td className='hide-on-med-and-down'>{this.props.goals}</td>
            <td className='hide-on-med-and-down'>{this.props.assists}</td>
            <td className='hide-on-lg-and-down'>{this.props.points}</td>
            <td className='hide-on-lg-and-down'>{this.props.wins}</td>
            <td className='hide-on-lg-and-down'>{this.props.losses}</td>
            <td className='hide-on-lg-and-down'>{this.props.overtimeLosses}</td>
            <td className='hide-on-lg-and-down'>{this.props.shutOuts}</td>
            <td className='hide-on-sm-and-down'>{this.props.goalsAllowedAverage}</td>
            <td className='hide-on-lg-and-down'>{this.props.goalsAllowed}</td>
            <td className='hide-on-lg-and-down'>{this.props.saves}</td>
            <td className='hide-on-sm-and-down'>{this.props.savePercentage}</td>
            <td className='hide-on-lg-and-down'>{this.props.minutesPlayed}</td>
            <td>                
                <PlayerFunctions {...this.props} />
            </td>
        </tr>
    }
}