import NavBar from './nav_bar.js'
import Signup from './signup.js'

class LandingPage extends React.Component {
    render() {
        return <div className='main'>
                <div className='front-page-title'>
                    <h1>CK Fantasy Hockey</h1>
                </div> 
                <Signup />
        </div>

    }
}

ReactDOM.render(
    <LandingPage />,
    document.getElementById('root')
)