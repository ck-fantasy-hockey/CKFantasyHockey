export default class NavBar extends React.Component {
    render() {
        return <nav className='nav-bar'>
            <ul>
                <li>
                    <a href='/dashboard'>User Dashboard</a>
                </li>
                <li>
                    <a href='/join-league'>Join League</a>
                </li>
                <li>
                    <a href='/login'>Logout</a>
                </li>
            </ul>
        </nav>
    }
}