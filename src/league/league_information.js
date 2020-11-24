export default class LeagueInformation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return <div className="team-info">
        <div className='team-info-text'>
            <h1>League: {this.props.data[1]}</h1>
            <p>League ID: {this.props.data[0]}</p>
            <p>Teams: {this.props.data[2]}</p>
            <p>Season End Date: {this.props.data[3]}</p>
        </div>
    </div>    
    }
}