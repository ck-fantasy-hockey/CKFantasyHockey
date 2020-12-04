export default class NavBar extends React.Component {

    handleDashboard = () => {
        window.location.href = "/dashboard?token="+localStorage.getItem('usertoken');
    }

    handleJoinLeague= () => {
        window.location.href = "/join-league?token="+localStorage.getItem('usertoken');
    }

    handleLogout = () => {
        localStorage.setItem('usertoken', "")
        window.location.href = "/login";
    }

    handlePlayer = () => {
        window.location.href = "/playeradmin?token="+localStorage.getItem('usertoken');
    }

    handlefaq = () => {
        window.location.href = "/faq?token="+localStorage.getItem('usertoken');
    }

    handleUserManagement = () => {
        window.location.href = "/user-management?token="+localStorage.getItem('userToken');
    }

    render() {
        return <nav className='nav-bar'>
        <ul>
            <div className="nav-logo">
                <div className='title-initials'>
                    <span>CK</span>
                </div>
            </div>
            <div className="nav-item">
            <li>
                <button type="submit" onClick={this.handleDashboard}>User Dashboard</button>
            </li>
            <li>
                <button type="submit" onClick={this.handleJoinLeague}>Join League</button>
            </li>
            </div>
            <div className="nav-item right">
                <div className='mod-func'>
                <li>
                    <button type="submit" onClick={this.handleUserManagement}>User Management</button>
                </li>
                {/* Put player management here */}
                </div>
                <li>
                    <button type="submit" onClick={this.handlefaq}>FAQ</button>
                </li>
                </div>
                <div className="nav-item right">
                    <li>
                    <button type="submit" onClick={this.handlePlayer}>Player Admin</button>
                    </li>
                    <li>
                        <button type="submit" onClick={this.handlefaq}>FAQ</button>
                    </li>
                    <li>
                        <button type="submit" onClick={this.handleLogout}>Logout</button>
                    </li>
                </div>
            </ul>
        </nav>
    }
                <li>
                    <button type="submit" onClick={this.handleLogout}>Logout</button>
                </li>
            </div>
        </ul>
    </nav>
}
}