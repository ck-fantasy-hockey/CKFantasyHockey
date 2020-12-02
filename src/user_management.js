import NavBar from './nav_bar.js'

class UserManagement extends React.Component {
    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <p>{JSON.stringify(dataFromServer)}</p>
            </div> 
        </div> 
    }
}

ReactDOM.render(
    <UserManagement />,
    document.getElementById('root')
)