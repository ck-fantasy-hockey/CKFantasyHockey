import data from '../../json/data.js'
import LeagueRow from './league_row.js'

export default class LeagueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagues: data.leagues
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
                <th>ID</th>
                <th>Name</th>
                <th>Teams</th>
                <th>Visibility</th>
                <th>Season Ends</th>
                <th>Functions</th>
            </tr>
        </thead>
        <tbody>
            {this.state.leagues.map(element =>
                <LeagueRow key={element.leagueID} {...element}/>
                )}
        </tbody>
    </table>
    <div className='roster-instructions'>
        <p>View the all leagues above and click 'JOIN' on a league you wish to create a team in.</p>
    </div>
    </div>;
    }
}