import Roster from './team/roster.js'
import TeamInformation from './team/team_information.js'

export default class TeamView extends React.Component {
    render() {
        return <div>
            <TeamInformation data={this.props.data} />
            <Roster data={this.props.data} />
        </div>
    }
}