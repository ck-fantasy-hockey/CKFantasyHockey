export default class UserTeamRow extends React.Component {

    handleTeamView = () => {
        window.location.href = "/team-view?token="+localStorage.getItem('usertoken')+"&teamID="+this.props[0];
    }

    render() {
        return <tr>
            <td>
                <button  className="dashboard-button" onClick={this.handleTeamView}>View</button>
            </td>
            <td className='hide-on-sm-and-down'>{this.props[0]}</td>
            <td>{this.props[1]}</td>
            <td>-</td>
            <td>-</td>
            <td className='hide-on-sm-and-down'>-</td>
            <td className='hide-on-sm-and-down'>-</td>
            <td>{this.props[2]}</td>
        </tr>
    }
}