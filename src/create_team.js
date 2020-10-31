import NavBar from './nav_bar.js'

class JoinLeague extends React.Component {
    render() {
        return <div>
            <NavBar />
            <div className='container'>
                <p>You are trying to join league {incoming}</p>
            </div> 
        </div> 
    }
}

ReactDOM.render(
    <JoinLeague />,
    document.getElementById('root')
  );