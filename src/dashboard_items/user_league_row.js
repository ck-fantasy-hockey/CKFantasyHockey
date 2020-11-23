export default class UserLeagueRow extends React.Component {

    handleLeagueView = () => {
        window.location.href = "/league-view?token="+localStorage.getItem('usertoken');
    }
    
    render() {
        return <tr>
            <td>
                <button onClick={this.handleLeagueView}>View</button>
            </td>
            <td>{this.props[0]}</td>
            <td>{this.props[1]}</td>
            <td>{this.props[3]}</td>
            <td>{this.props[2]}</td>
            <td>{this.props.leader}</td>
        </tr>
    }
}