import NavBar from './nav_bar.js'

class LandingPage extends React.Component {
    render() {
        return <div>
            <NavBar />
            <h1>WELCOME TO CKFantasyHockey!</h1>
        </div>
    }
}

ReactDOM.render(
    <LandingPage />,
    document.getElementById('root')
)