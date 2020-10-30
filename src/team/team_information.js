export default class TeamInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.data.teamInformation
    }
    render() {
    return <div>
        <p>{this.state.teamName}</p>
        <p>{this.state.createdOn}</p>
        <p>{this.state.leagueName}</p>
        <p>{this.state.leagueID}</p>
    </div>
        
    }
}