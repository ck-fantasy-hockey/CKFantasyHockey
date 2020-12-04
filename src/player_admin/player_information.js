export default class PlayerInformation extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEditAccount = (event) => {
        event.preventDefault();
        window.location.href = "/dashboard?token="+localStorage.getItem('usertoken');
    }

    render() {
    return <div className="team-info">
        <div className="team-info-primary">
            <div className="team-info-header">
                <img className='team-info-image' src='/static/img/hockey-team.jpg' />
            </div>
            <div className='team-info-text'>
                {/* <h1>League: {this.props.data[1]}</h1>
                <p>League ID: {this.props.data[0]}</p>
                <p>Teams: {this.props.data[2]}</p>
                <p>Season End Date: {this.props.data[3]}</p> */}
            </div>
        </div>
        <div className="team-info-subheader">
                <button type="submit" className="dashboard-button" onClick={this.handleEditAccount}>Back to Dashboard</button>
        </div>
    </div>    
    }
}