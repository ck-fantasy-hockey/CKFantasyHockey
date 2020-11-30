import Modal from './modal.js'

export default class TeamInformation extends React.Component {
    state = {show: false};

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
    };

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
            <Modal show={this.state.show} handleClose={this.hideModal}>
                <p>Modal</p>
                <p>Data</p>
            </Modal>
            <button className="btn" onClick={this.showModal}>Delete Team</button>
        </div>
    </div>    
    }
}