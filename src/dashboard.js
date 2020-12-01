import UserInfo from './dashboard_items/user_info.js'
import UserLeagues from './dashboard_items/user_leagues.js'
import UserTeams from './dashboard_items/user_teams.js'
import NavBar from './nav_bar.js'

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = dataFromServer;
    }

    render() { 
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <div className="split-widgets"></div>
                <UserInfo data={this.state} />
                <div className="split-widgets"></div>
                <UserLeagues data={this.state} />
                <div className="split-widgets"></div>
                <UserTeams data={this.state} />
            </div>
        </div> 
    }
}


ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
  );