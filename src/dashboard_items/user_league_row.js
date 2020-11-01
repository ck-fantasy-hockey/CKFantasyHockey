export default class UserLeagueRow extends React.Component {
    
    render() {
        return <tr>
            <td><a href='/league-view'><button >View</button></a></td>
            <td>{this.props.leagueID}</td>
            <td>{this.props.name}</td>
            <td>{this.props.teams}</td>
            <td>{this.props.seasonEndDate}</td>
            <td>{this.props.leader}</td>
        </tr>
    }
}