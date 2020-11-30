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
            <button className="btn" onClick={this.editAttributes}>Edit Team Attributes</button>
            <button className="btn">Delete Team</button>
        </div>
    </div>    
    }
}