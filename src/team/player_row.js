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
            <td className='wide'>{this.props.playerName}</td>
            <td className='wide'>{this.abbreviate(this.props.team)}</td>
            <td className='wide'>{this.props.status}</td>
            <td className='narrow'>{this.props.playerID}</td>
            <td className='narrow'>{this.abbreviate(this.props.position)}</td>
            <td className='narrow'>{this.props.gamesPlayed}</td>
            <td className='narrow'>{this.props.goals}</td>
            <td className='narrow'>{this.props.assists}</td>
            <td className='narrow'>{this.props.points}</td>
            <td className='narrow'>{this.props.shootoutGoals}</td>
            <td className='narrow'>{this.props.hatTricks}</td>
            <td className='narrow'>{this.props.plusMinus}</td>
            <td className='narrow'>{this.props.pointsPerGame}</td>
            <td className='narrow'>{this.props.shorthandedGoals}</td>
            <td className='narrow'>{this.props.penaltyMinutes}</td>
            <td className='narrow'>{this.props.blocks}</td>

            <td className='wide'>
                <PlayerFunctions {...this.props} />
            </td>
        </tr>
    }
}