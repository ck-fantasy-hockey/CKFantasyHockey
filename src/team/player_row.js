import PlayerFunctions from './player_functions.js'

export default class PlayerRow extends React.Component {
    constructor(props) {
        super(props)

    }

    // Takes any string and returns the first letter of each in a 
    // new string all uppercased
    abbreviate = (string) => {
        const stringWords = string.split(" ")
        let abbreviation = ""
        stringWords.forEach((word) => {
            abbreviation += word[0]
        })
        abbreviation.toUpperCase()
        return abbreviation
    }

    render() {
        return <tr>
            <td>{this.props.playerName}</td>
            <td className='hide-on-sm-and-down'>{this.abbreviate(this.props.team)}</td>
            <td className='hide-on-med-and-down'>{this.props.status}</td>
            <td className='hide-on-med-and-down'>{this.props.playerID}</td>
            <td className='hide-on-sm-and-down'>{this.abbreviate(this.props.position)}</td>
            <td className='hide-on-med-and-down'>{this.props.gamesPlayed}</td>
            <td className='hide-on-sm-and-down'>{this.props.goals}</td>
            <td className='hide-on-sm-and-down'>{this.props.assists}</td>
            <td className='hide-on-lg-and-down'>{this.props.points}</td>
            <td className='hide-on-lg-and-down'>{this.props.shootoutGoals}</td>
            <td className='hide-on-lg-and-down'>{this.props.hatTricks}</td>
            <td className='hide-on-med-and-down'>{this.props.plusMinus}</td>
            <td className='hide-on-lg-and-down'>{this.props.pointsPerGame}</td>
            <td className='hide-on-lg-and-down'>{this.props.shorthandedGoals}</td>
            <td className='hide-on-lg-and-down'>{this.props.penaltyMinutes}</td>
            <td className='hide-on-lg-and-down'>{this.props.blocks}</td>

            <td>
                <PlayerFunctions {...this.props} />
            </td>
        </tr>
    }
}