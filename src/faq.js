import NavBar from './nav_bar.js'

class Dashboard extends React.Component {
    render() { 
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <div className='faq-head'>
                    <h1>FAQ</h1>
                </div>
                <div className='faq-body'>
                    <h3>
                        How does CK Fantasy Hockey work?
                    </h3>
                    <p>CK Fantasy Hockey is a fantasy hockey application that allows you to join leagues, create teams, add players to your team, create your own personalized roster,
                        and manage your roster. 
                    </p>
                    <h3>
                        Where does your player data come from?
                    </h3>
                    <p></p>
                </div>
            </div>
        </div> 
    }
}

ReactDOM.render(
    <FAQ />,
    document.getElementById('root')
  );