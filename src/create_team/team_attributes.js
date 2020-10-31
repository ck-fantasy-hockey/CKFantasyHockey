import TeamAttributesForm from './team_attributes_form.js'

export default class TeamAttributes extends React.Component {
    render() {
        return <div className="team_info">
        <div>
            <i className="fas fa-hockey-puck"></i>
        </div>
        <div className='team_info_text'>
            <TeamAttributesForm />
        </div>
    </div>
    }
}