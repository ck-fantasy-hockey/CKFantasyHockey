export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data.userInfo
    }
    render() {
    return <div className="team_info">
        <div>
            <img className='team_info_image' src={'/static/img/' + this.state.userAvatar} />
        </div>
        <div className='team_info_text'>
            <h1>{this.state.userName}</h1>
            <p>User ID: {this.state.userID}</p>
            <p>Email: {this.state.email}</p>
            <p>No. of Teams: {this.state.teams}</p>
            <p>League Wins: {this.state.leagueWins}</p>
        </div>
    </div>    
    }
}