import NavBar from './nav_bar.js'

class JoinTeam extends React.Component {
    render() {
        return <div>
            <NavBar />
            <div className='container'>
                <h1>JOIN TEAM</h1>
            </div>
            
        </div> 
    }
}

ReactDOM.render(
    <JoinTeam />,
    document.getElementById('root')
  );