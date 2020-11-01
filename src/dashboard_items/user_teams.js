import UserTeamRow from './user_team_row.js'
export default class UserLeagues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userteams: this.props.data.userTeams
        }
    }

    render() {
        return <div className='roster'>
            <div className='roster_title'>
                <h2>Teams</h2>
            </div>
            
            <table>
            <thead>
                <tr>
                    <th>  </th>
                    <th>Team ID</th>
                    <th>Team</th>
                    <th>Rank</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Created On</th>
                    <th>League Name</th>
                </tr>
            </thead>
            <tbody>
                {this.state.userteams.map(element =>
                    <UserTeamRow key={element.teamID} {...element}/>
                    )}
            </tbody>
        </table>
        </div>
    }
}