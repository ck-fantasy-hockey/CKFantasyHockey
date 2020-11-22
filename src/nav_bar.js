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

    render() {
        return <nav className='nav-bar'>
            <ul>
                <div className="nav-item">
                <li>
                    <button type="submit" onClick={this.handleDashboard}>User Dashboard</button>
                </li>
                </div>
                <div className="nav-item">
                <li>
                    <button type="submit" onClick={this.handleJoinLeague}>Join League</button>
                </li>
                </div>
                <div className="nav-item right">
                <li>
                    <button type="submit" onClick={this.handleLogout}>Logout</button>
                </li>
                </div>
            </ul>
        </nav>
    }
}