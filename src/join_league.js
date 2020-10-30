import NavBar from './nav_bar.js'

class JoinLeague extends React.Component {
    render() {
        return <div>
            <NavBar />
            <div className='container'>
                <h1>JOIN LEAGUE</h1>
            </div>
            
        </div> 
    }
}

ReactDOM.render(
    <JoinLeague />,
    document.getElementById('root')
  );