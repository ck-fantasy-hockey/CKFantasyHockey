import NavBar from './nav_bar.js'
import Signup from './signup.js'

class LandingPage extends React.Component {
    render() {
        return <div className= 'background-filter'>
            <div className='welcome-content'>
                <div className='front-page-title'>
                    <div className='title-initials'><span>CK</span></div>
                    <div className='title-text'>
                        <span>Fantasy</span>
                        <span>Hockey</span>
                    </div>

                </div> 
                <Signup />
                <div className='footer'>
                    <div className='footer-left'>
                        <a href='https://github.com/ck-fantasy-hockey/CKFantasyHockey'><i class="fab fa-github"></i> GitHub</a>
                        <div className='divider'> </div>
                        <p className='paragraph-header'>Developed with Pride by:</p>
                        <p>William Coiner</p>
                        <p>George Kochera</p>
                    </div>
                    <div className='footer-center'>
                        <div className='tagline'>
                            <h1>Sign up and join</h1>
                            <h4>the most exciting platform in fantasy hockey!</h4>
                        </div>
                    </div>
                    <div className='footer-right'>
                        <p>Powered by</p>
                        <p><i className="fab fa-react"></i><i className="fas fa-flask"></i></p>
                    </div>
                </div>
            </div>
            
        </div>

    }
}

ReactDOM.render(
    <LandingPage />,
    document.getElementById('root')
)
