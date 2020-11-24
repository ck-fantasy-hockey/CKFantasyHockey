export default class TeamInformation extends React.Component {
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
            <button className="btn">Delete Team</button>
        </div>
    </div>    
    }
}