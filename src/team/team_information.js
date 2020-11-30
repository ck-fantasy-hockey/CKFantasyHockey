import Modal from './modal.js'

export default class TeamInformation extends React.Component {
    state = {show: false};

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModalAccept = () => {
        this.setState({ show: false });
        this.deleteTeam();
    };

    hideModalReject = () => {
        this.setState({ show: false });
    };

    deleteTeam = () => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        const teamID = parseInt(urlParams.get('teamID'))
        const userdata = {teamid: teamID};
        const url = "/delete-team"
        fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(userdata)
        })
        .then((response) => response.json())
        .then(data => {
            if (data['response'] === true) {
                window.location.href = "/dashboard?token="+localStorage.getItem('usertoken');
            } else {
                // const element = <p className="incorrect-text">Username or password is incorrect</p>;
                // ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            }
        })
    }



    render() {
    return <div className="team-info">
        <div className="team-info-primary">
            <div className="team-info-header">
                <img className='team-info-image' src={'/static/img/hockey1_unsplash.jpg'} />
            </div>
            <div className='team-info-text'>
                <h1>{this.props.teamName}</h1>
                <p>Season Ends: {this.props.leagueInfo.seasonEnds}</p>
                <p>League: {this.props.leagueInfo.leagueName}</p>
                <p>League ID: {this.props.leagueInfo.leagueID}</p>
            </div>
        </div>
        <div className="team-info-subheader">
            <button className="btn">Edit Team Attributes</button>
            <Modal show={this.state.show} handleCloseAccept={this.hideModalAccept} handleCloseReject={this.hideModalReject}>
            </Modal>
            <button className="btn" onClick={this.showModal}>Delete Team</button>
        </div>
    </div>    
    }
}