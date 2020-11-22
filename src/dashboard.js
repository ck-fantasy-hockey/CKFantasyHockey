import UserInfo from './dashboard_items/user_info.js'
import UserLeagues from './dashboard_items/user_leagues.js'
import UserTeams from './dashboard_items/user_teams.js'
import NavBar from './nav_bar.js'
import data from '../json/data.js'

// window.history.replaceState({}, document.title, "/dashboard");

class Dashboard extends React.Component {
    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <div className="split-widgets"></div>
                <UserInfo data={data} />
                <div className="split-widgets"></div>
                <UserLeagues data={data} />
                <div className="split-widgets"></div>
                <UserTeams data={data} />
            </div>
        </div>
    }
}

ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
  );