import NavBar from './nav_bar.js'
import UserRoster from './user_management/user_roster.js'
class UserManagement extends React.Component {
    render() {
        return <div className='background-filter'>
            <NavBar />
            <div className='container'>
                <UserRoster users={dataFromServer} />
            </div> 
        </div> 
    }
}

ReactDOM.render(
    <UserManagement />,
    document.getElementById('root')
)