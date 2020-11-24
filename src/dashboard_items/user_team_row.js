export default class UserTeamRow extends React.Component {

    handleTeamView = (event) => {
        event.preventDefault();
        const pageData = {
            teamID: this.props[0]
        }
        const url = "/team-view?token=" + localStorage.getItem('usertoken');
        fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(pageData)
        })
        .then((response) => response.json())
        .then(data => {
            console.log(data)
        })
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