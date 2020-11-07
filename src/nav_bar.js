export default class NavBar extends React.Component {
    render() {
        return <nav className='nav-bar'>
            <ul>
                <div className="nav-item">
                <li>
                    <a href='/dashboard'>User Dashboard</a>
                </li>
                </div>
                <div className="nav-item">
                <li>
                    <a href='/join-league'>Join League</a>
                </li>
                </div>
                <div className="nav-item right">
                <li>
                    <a href='/login'>Logout</a>
                </li>
                </div>
            </ul>
        </nav>
    }
}