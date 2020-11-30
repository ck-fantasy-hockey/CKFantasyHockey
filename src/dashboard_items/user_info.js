export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEditAccount = (event) => {
        event.preventDefault();
        window.location.href = "/account-page?token="+localStorage.getItem('usertoken');
    }

    render() {
    return <div className="team-info">
    <div className="team-info-primary">
        <div className="team-info-header">
            <img className='team-info-image' src='/static/img/user-photo.png' />
        </div>
        <div className='team-info-text'>
            <h1>{this.props.data.username}</h1>
            <p>Email: {this.props.data.email}</p>
            <p>No. of Teams: {this.props.data.team_count}</p>
            <p>League Wins: 0</p>
        </div>
    </div>
    <div className="team-info-subheader">
    <button type="submit" className="dashboard-button" onClick={this.handleEditAccount}>Edit Account</button>
    </div>
</div> 
    }
}

   