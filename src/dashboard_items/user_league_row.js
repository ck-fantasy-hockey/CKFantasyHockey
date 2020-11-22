export default class UserLeagueRow extends React.Component {

    handleLeagueView = () => {
        window.location.href = "/league-view?token="+localStorage.getItem('usertoken');
    }
    
    render() {
        return <tr>
            <td>
                <button onClick={this.handleLeagueView}>View</button>
            </td>
            <td>{this.props.leagueID}</td>
            <td>{this.props.name}</td>
            <td>{this.props.teams}</td>
            <td>{this.props.seasonEndDate}</td>
            <td>{this.props.leader}</td>
        </tr>
    }
}