export default class TeamInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data.teamInformation
    }
    render() {
    return <div className="team-info">
        <div className="team-info-primary">
            <div className="team-info-header">
                <img className='team-info-image' src={'/static/img/' + this.state.teamLogo} />
            </div>
            <div className='team-info-text'>
                <h1>{this.state.teamName}</h1>
                <p>Created: {this.state.createdOn}</p>
                <p>League: {this.state.leagueName}</p>
                <p>League ID: {this.state.leagueID}</p>
            </div>
        </div>
        <div className="team-info-subheader">
            <button className="btn">Edit Team Attributes</button>
            <button className="btn">Delete Team</button>
        </div>
    </div>    
    }
}