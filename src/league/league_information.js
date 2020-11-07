export default class LeagueInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data.leagues[0]
    }
    render() {
    return <div className="team-info">
        <div className='team-info-text'>
            <h1>League: {this.state.name}</h1>
            <p>League ID: {this.state.leagueID}</p>
            <p>Teams: {this.state.teams}</p>
            <p>Season End Date: {this.state.seasonEndDate}</p>
        </div>
    </div>    
    }
}