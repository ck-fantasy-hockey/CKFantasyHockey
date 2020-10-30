export default class NavBar extends React.Component {
    render() {
        return <nav>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/join-team'>Join Team</a>
                </li>
                <li>
                    <a href='/team-view'>Team View</a>
                </li>
            </ul>
        </nav>
    }
}