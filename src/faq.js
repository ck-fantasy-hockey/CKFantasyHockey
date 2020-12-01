import NavBar from './nav_bar.js'

class FAQ extends React.Component {
    render() { 
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <div className='faq-container'>
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
                            Where does the player data come from?
                        </h3>
                        <p>All data is pulled from the official NHL player statistics API. Once the season starts player data will updated daily. More information on this API can be found <a href="https://github.com/dword4/nhlapi">here</a>.</p>
                        <h3>
                            Can I join any league?
                        </h3>
                        <p>Leagues marked as private cannot be joined by any user. They are invite only. You can join any public league with team slots available!</p>
                        <h3>
                            How do I view the leagues I am in and the teams I have created?
                        </h3>
                        <p>You can view all of the leagues you have joined and the teams you have created from your User Dashboard. From the dashboard you can click 'View'
                            on any of the leagues you are in or teams you have created to view their details and manage your roster.
                        </p>
                        <h3>
                            Can I leave a league I have joined?
                        </h3>
                        <p>While you cannot leave a league once you have joined it, you can delete your team at any time if you no longer wish to participate.</p>
                        <h3>
                            How can I learn more about the amazing developers that created this incredible fantasy hockey app?
                        </h3>
                        <p>The Github for this project can be found <a href="https://github.com/ck-fantasy-hockey/CKFantasyHockey">here</a>.</p>
                        <p>George Kochera can be found on <a href="https://github.com/gkochera">Github</a>.</p>
                        <p>Wil Coiner can be found on <a href="https://github.com/coinerwh">Github</a> and <a href="https://www.linkedin.com/in/william-coiner-a78b8398/">LinkedIn</a>.</p>
                    </div>
                </div>
            </div>
        </div> 
    }
}

ReactDOM.render(
    <FAQ />,
    document.getElementById('root')
  );