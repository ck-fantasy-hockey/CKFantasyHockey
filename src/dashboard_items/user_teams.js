import UserTeamRow from './user_team_row.js'
export default class UserTeams extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='roster'>
            <div className='roster-title'>
                <h2>Teams</h2>
            </div>
            
            <table>
            <thead>
                <tr>
                    <th className="team-functions">  </th>
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
                {this.props.data.team_info.map(element =>
                    <UserTeamRow key={element[0]} {...element}/>
                    )}
            </tbody>
        </table>
        </div>
    }
}