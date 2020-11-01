export default class NavBar extends React.Component {
    render() {
        return <nav className='nav-bar'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/join-league'>Join League</a>
                </li>
                <li>
                    <a href='/team-view'>Team View</a>
                </li>
                <li>
                    <a href='/league-view'>League View</a>
                </li>
            </ul>
        </nav>
    }
}