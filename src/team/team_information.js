import TeamInformationText from './team_info_text.js'
export default class TeamInformation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editingAttributes: false
        }
        
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
            {editButton}
            <button className="btn">Delete Team</button>
        </div>
    </div>    
    }
}