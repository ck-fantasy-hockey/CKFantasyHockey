export default class UserTeamRow extends React.Component {

    handleTeamView = () => {
        window.location.href = "/team-view?token="+localStorage.getItem('usertoken')+"&teamid="+this.props[0];
    }

    render() {
        return <tr>
            <td>
                <button onClick={this.handleTeamView}>View</button>
            </td>
            <td>{this.props[0]}</td>
            <td>{this.props[1]}</td>
            <td>{this.props.rank}</td>
            <td>{this.props.win}</td>
            <td>{this.props.loss}</td>
            <td>{this.props.createdOn}</td>
            <td>{this.props[2]}</td>
        </tr>
    }
}