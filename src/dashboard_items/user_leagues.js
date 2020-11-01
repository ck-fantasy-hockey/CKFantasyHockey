import UserLeagueRow from './user_league_row.js'
export default class UserLeagues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userleagues: this.props.data.userLeagues
        }
    }

    render() {
        return <div className='roster'>
            <div className='roster_title'>
                <h2>Leagues</h2>
            </div>
            
            <table>
            <thead>
                <tr>
                    <th>  </th>
                    <th>League ID</th>
                    <th>League Name</th>
                    <th>No. of Teams</th>
                    <th>Season End Date</th>
                    <th>Leader</th>
                </tr>
            </thead>
            <tbody>
                {this.state.userleagues.map(element =>
                    <UserLeagueRow key={element.leagueID} {...element}/>
                    )}
            </tbody>
        </table>
        </div>
    }
}