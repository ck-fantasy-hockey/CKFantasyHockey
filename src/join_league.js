import NavBar from './nav_bar.js'
import LeagueList from './join_league/league_list.js';

class JoinLeague extends React.Component {
    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <LeagueList />
            </div> 
        </div> 
    }
}

ReactDOM.render(
    <JoinLeague />,
    document.getElementById('root')
)