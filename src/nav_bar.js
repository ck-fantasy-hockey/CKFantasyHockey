export default class NavBar extends React.Component {
    render() {
        return <nav>
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
            </ul>
        </nav>
    }
}