import UserLeagueRow from './user_league_row.js'
export default class UserLeagues extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.data.league_info[0])
    }

    render() {
        return <div className='roster'>
            <div className='roster-title'>
                <h2>Leagues</h2>
            </div>
            
            <table>
            <thead>
                <tr>
                    <th className="league-functions">  </th>
                    <th>League ID</th>
                    <th>League Name</th>
                    <th>No. of Teams</th>
                    <th>Season End Date</th>
                    <th>Leader</th>
                </tr>
            </thead>
            <tbody>
                {this.props.data.league_info.map(element =>
                    <UserLeagueRow key={element[0]} {...element}/>
                    )}
            </tbody>
        </table>
        </div>
    }
}