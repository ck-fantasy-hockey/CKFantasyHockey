export default class LeagueRow extends React.Component {
    joinLeagueButton() {
        if (this.props.joinable) {
            return <a href={'/join?team=' + this.props.leagueID}><button>JOIN</button></a>
        } else {
            return <span className='league-closed'>CLOSED</span>
        }
    }
    render() {
        return <tr>
            <td>{this.props.leagueID}</td>
            <td>{this.props.name}</td>
            <td>{this.props.teams}</td>
            <td>{this.props.visibility}</td>
            <td>{this.props.seasonEndDate}</td>
            <td>{this.joinLeagueButton()}</td>
        </tr>
    }
}