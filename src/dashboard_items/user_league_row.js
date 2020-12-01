export default class UserLeagueRow extends React.Component {

    handleLeagueView = () => {
        window.location.href = "/league-view?token="+localStorage.getItem('usertoken')+"&leagueid="+this.props[0];
    }
    
    render() {
        return <tr>
            <td>
                <button className="dashboard-button" onClick={this.handleLeagueView}>View</button>
            </td>
            <td className='hide-on-sm-and-down'>{this.props[0]}</td>
            <td>{this.props[1]}</td>
            <td>{this.props[3]}</td>
            <td className='hide-on-sm-and-down'>{this.props[2]}</td>
            <td>-</td>
        </tr>
    }
}