import NavBar from './nav_bar.js'

class LandingPage extends React.Component {
    render() {
        return <div className='main'>
                <NavBar />
                <div className='front-page-title'>
                    <h1>CK Fantasy Hockey</h1>
                </div> 
        </div>
    }
}

ReactDOM.render(
    <LandingPage />,
    document.getElementById('root')
)