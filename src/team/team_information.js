export default class TeamInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data.teamInformation
    }
    render() {
    return <div className="team_info">
        <div>
            <img className='team_info_image' src={'/static/img/' + this.state.teamLogo} />
        </div>
        <div className='team_info_text'>
            <h1>{this.state.teamName}</h1>
            <p>{this.state.createdOn}</p>
            <p>{this.state.leagueName}</p>
            <p>{this.state.leagueID}</p>
        </div>
    </div>    
    }
}