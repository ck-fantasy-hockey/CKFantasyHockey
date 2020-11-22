import NavBar from './nav_bar.js'
import TeamAttributes from './create_team/team_attributes.js'
import PlayerSelect from './create_team/player_select.js'

window.history.replaceState({}, document.title, "/create-team");

class JoinLeague extends React.Component {
    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <TeamAttributes />
                <PlayerSelect />
            </div> 
        </div> 
    }
}

ReactDOM.render(
    <JoinLeague />,
    document.getElementById('root')
    );