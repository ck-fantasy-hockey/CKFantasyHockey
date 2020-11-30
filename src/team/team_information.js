

export default class TeamInformation extends React.Component {
    deleteTeam = (event) => {
        event.preventDefault();
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do delete this team?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => alert('Click Yes')
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
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
            <button className="btn" onClick={this.deleteTeam}>Delete Team</button>
            {/* {() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel(item) } } */}
        </div>
    </div>    
    }
}