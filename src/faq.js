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
                    
                </div>
            </div>
        </div> 
    }
}

ReactDOM.render(
    <FAQ />,
    document.getElementById('root')
  );