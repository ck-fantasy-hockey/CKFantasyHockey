export default class LeagueRow extends React.Component {
    joinLeagueButton() {
        if (this.props.joinable) {
            return <a href={'/create-team?leagueID=' + this.props.leagueID + '&token=' + localStorage.getItem('usertoken')}><button className='btn btn-join'>JOIN</button></a>
        } else {
            return <span className='league-closed'>CLOSED</span>
        }
    }
    render() {
        return <tr>
            <td className='narrow hide-on-sm-and-down'>{this.props.leagueID}</td>
            <td className='wide'>{this.props.name}</td>
            <td className='wide hide-on-sm-and-down'>{this.props.teams}</td>
            <td className='wide hide-on-sm-and-down'>{this.props.visibility}</td>
            <td className='narrow'>{this.props.seasonEndDate}</td>
            <td className='narrow'>{this.joinLeagueButton()}</td>
        </tr>
    }
}

