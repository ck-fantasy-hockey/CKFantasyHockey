export default class UserRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <tr>
            <td>{this.props.email}</td>
            <td className='hide-on-sm-and-down'>{this.props.password}</td>
            <td className='hide-on-med-and-down'>{this.props.sessionID}</td>
            <td className='hide-on-med-and-down'>{this.props.sessionExpires}</td>
            <td>
                <button>Delete</button>
                <button>Reset Password</button>
            </td>
        </tr>
    }
}