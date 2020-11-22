export default class UserTeamRow extends React.Component {

    handleTeamView = () => {
        window.location.href = "/team-view?token="+localStorage.getItem('usertoken');
    }

    render() {
        return <tr>
            <td>
                <button onClick={this.handleTeamView}>View</button>
            </td>
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