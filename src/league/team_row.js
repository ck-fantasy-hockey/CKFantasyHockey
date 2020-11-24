export default class TeamRow extends React.Component {
    render() {
        return <tr>
            <td>-</td>
            <td>{this.props[0]}</td>
            <td>{this.props[1]}</td>
            <td>{this.props[2]}</td>
            <td>-</td>
            <td>-</td>
        </tr>
    }
}