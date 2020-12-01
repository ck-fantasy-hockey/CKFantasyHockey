import UserLeagueRow from './user_league_row.js'
export default class UserLeagues extends React.Component {
    constructor(props) {
        super(props);
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
                    <th className='hide-on-sm-and-down'>League ID</th>
                    <th>League Name</th>
                    <th># of Teams</th>
                    <th className='hide-on-sm-and-down'>Season Ends</th>
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