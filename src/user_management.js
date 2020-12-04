import NavBar from './nav_bar.js'
import UserRoster from './user_management/user_roster.js'
class UserManagement extends React.Component {
<<<<<<< HEAD

    // Takes a userID and sends it via POST to be removed from the DB
    deleteUser = (userID) => {
        const url = "/delete-user"
        fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(userID)
        })
        .then((response) => response.json())
        .then(data => {
            if (data['response'] === true) {
                window.location.href = "/user-management?token="+localStorage.getItem('usertoken');
            } else {
                console.log('error')
            }
        })
    }

=======
>>>>>>> parent of d5658e6... can now delete users from the database
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