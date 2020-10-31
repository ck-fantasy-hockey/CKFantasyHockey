import NavBar from './nav_bar.js'
import TeamAttributes from './create_team/team_attributes.js'
import PlayerSelect from './create_team/player_select.js'

class JoinLeague extends React.Component {
    render() {
        return <div>
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