import Modal from './modal.js'
import TeamInformationText from './team_info_text.js'

export default class TeamInformation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editingAttributes: false,
            show: false
        }
        
    }
  
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
            console.log(data)
            if (data['response'] === true) {
                window.location.href = "/dashboard?token="+localStorage.getItem('usertoken');
            } else {
                console.log('yay')
                // const element = <p className="incorrect-text">Username or password is incorrect</p>;
                // ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            }
        })
    }

    editAttributes = () => {
        this.setState({editingAttributes: !this.state.editingAttributes})
    }

    render() {
    let editButton
    if (this.state.editingAttributes) {
        editButton = [<button key='1' className="btn" onClick={this.editAttributes}>Clear</button>,
        <button key='2' className="btn" onClick={this.props.functions.commitUpdateTeamAttributes}>Update Team Attributes</button>]
    } else {
        editButton = <button key='3' className="btn" onClick={this.editAttributes}>Edit Team Attributes</button>
    }
    return <div className="team-info">
        <div className="team-info-primary">
            <div className="team-info-header">
                <img className='team-info-image' src={'/static/img/hockey1_unsplash.jpg'} />
            </div>
            <div className='team-info-text'>
                <TeamInformationText {...this.props} {...this.state} />
            </div>
        </div>
        <div className="team-info-subheader">
            <button className="btn">Edit Team Attributes</button>
            <Modal show={this.state.show} handleCloseAccept={this.hideModalAccept} handleCloseReject={this.hideModalReject}>
            </Modal>
            <button className="btn" onClick={this.showModal}>Delete Team</button>
            {editButton}
            <button className="btn">Delete Team</button>
        </div>
    </div>    
    }
}