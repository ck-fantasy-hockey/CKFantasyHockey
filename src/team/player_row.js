import PlayerFunctions from './player_functions.js'

export default class PlayerRow extends React.Component {
    constructor(props) {
        super(props)

    }

    shortenTeamName = (teamName) => {
        const teamNameWords = teamName.split(" ")
        let abbreviatedTeamName = ""
        teamNameWords.forEach((word) => {
            abbreviatedTeamName += word[0]
            console.log(abbreviatedTeamName)
        })
        return abbreviatedTeamName
    }

    render() {
        return <tr>
            <td>{this.props.playerName}</td>
            <td>{this.shortenTeamName(this.props.team)}</td>
            <td>{this.props.status}</td>
            <td>{this.props.playerID}</td>
            <td>{this.props.position}</td>
            <td>{this.props.gamesPlayed}</td>
            <td>{this.props.goals}</td>
            <td>{this.props.assists}</td>
            <td>{this.props.points}</td>
            <td>{this.props.shootoutGoals}</td>
            <td>{this.props.hatTricks}</td>
            <td>{this.props.plusMinus}</td>
            <td>{this.props.pointsPerGame}</td>
            <td>{this.props.shorthandedGoals}</td>
            <td>{this.props.penaltyMinutes}</td>
            <td>{this.props.blocks}</td>

            <td>
                <PlayerFunctions {...this.props} />
            </td>
        </tr>
    }
}