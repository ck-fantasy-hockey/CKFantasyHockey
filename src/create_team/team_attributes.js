import TeamAttributesForm from './team_attributes_form.js'

export default class TeamAttributes extends React.Component {
    render() {
        return <div className='roster'>
            <div className='roster-title'>
                <h2>Team Information</h2>
            </div>
            <div className="team-info">
                <div className='team-info-text'>
                    <TeamAttributesForm {...this.props}/>
                </div>
            </div>
        </div>
    }
}