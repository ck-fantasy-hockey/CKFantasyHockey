export default class UserTeamRow extends React.Component {
    render() {
        return <tr>
            <td><a href='/team-view'><button >View</button></a></td>
            <td>{this.props.teamID}</td>
            <td>{this.props.teamName}</td>
            <td>{this.props.rank}</td>
            <td>{this.props.win}</td>
            <td>{this.props.loss}</td>
            <td>{this.props.createdOn}</td>
            <td>{this.props.leagueName}</td>
        </tr>
    }
}