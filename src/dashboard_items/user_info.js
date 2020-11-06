export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data.userInfo
    }
    render() {
    return <div className="team-info">
    <div className="team-info-primary">
        <div className="team-info-header">
            <img className='team-info-image' src={'/static/img/' + this.state.userAvatar} />
        </div>
        <div className='team-info-text'>
            <h1>{this.state.userName}</h1>
            <p>User ID: {this.state.userID}</p>
            <p>Email: {this.state.email}</p>
            <p>No. of Teams: {this.state.teams}</p>
            <p>League Wins: {this.state.leagueWins}</p>
        </div>
    </div>
    <div className="team-info-subheader">
    <a href='/account-page'></a><button className="btn">Edit Account</button>
    </div>
</div> 
    }
}

   