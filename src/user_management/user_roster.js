import UserRow from './user_row.js'
export default class Roster extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return <div className='roster'>
            <div className='roster-title'>
                <h2>User Management</h2>
            </div>
            <div className='player-table'>
            <table>
            <thead>
                <tr>
                    <th className='wide'>
                        <div className="tooltip">
                            <span className="tooltiptext">User ID</span>
                            User ID
                        </div>
                    </th>
                    <th className='wide'>
                        <div className="tooltip">
                            <span className="tooltiptext">Email</span>
                            Email
                        </div>
                    </th>
                    <th className='wide hide-on-sm-and-down'>
                        <div className="tooltip">
                            <span className="tooltiptext">Password</span>
                            Password
                        </div>
                    </th>
                    <th className='wide hide-on-med-and-down'>
                        <div className="tooltip">
                            <span className="tooltiptext">Session ID</span>
                            Session ID
                        </div>
                    </th>
                    <th className='narrow hide-on-med-and-down'>
                        <div className="tooltip">
                            <span className="tooltiptext">Session Expires</span>
                            Session Expires
                        </div>
                    </th>
                    <th className='wide player-functions'></th>
                </tr>
            </thead>
            <tbody>
            {this.props.users.map(element =>
                    <UserRow key={element.userID} {...element} deleteUser={this.props.deleteUser}/>
            )}
            </tbody>
        </table>
        </div>
        </div>;
    }
}