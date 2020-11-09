export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', email: '', password: '', passwordConfirm: '' };
    }

    handleEmailInput = (event) => {
        this.setState({ email: event.target.value });
    }

    handlePasswordInput = (event) => {
        this.setState({ password: event.target.value });
    }

    handleConfirmPasswordInput = (event) => {
        this.setState({ passwordConfirm: event.target.value });
    }

    handleUsernameInput = (event) => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userdata = this.state
        const url = "/submitsignup"
        fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(userdata)
        })
        .then((response) => response.json())
        .then(data => {
            if (data['response'] === true) {
                window.location.href = "/login";
            } else {
                const element = <p className="incorrect-text">Username taken</p>;
                ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            }
        })
    }

    handleLogin = (event) => {
        event.preventDefault();
        window.location.href = "/login";
    }

    render() {
        return <div className="account-form">
            <div className="account-title"><h2>Create account</h2></div>
            <form className="form">
            <div className="incorrect-creds"></div>
            <p>Username</p>
                <input
                    text="Username"
                    ref="user"
                    type="text"
                    defaultValue={this.state.username}
                    value={this.state.username}
                    onChange={this.handleUsernameInput}
                    errorMessage="Email is invalid"
                    emptyMessage="Email can't be empty"
                />

                <p>Email Address</p>
                <input
                    text="Email Address"
                    ref="email"
                    type="text"
                    defaultValue={this.state.email}
                    value={this.state.email}
                    onChange={this.handleEmailInput}
                    errorMessage="Email is invalid"
                    emptyMessage="Email can't be empty"
                />
                <p>Password</p>
                <input
                    text="Password"
                    type="password"
                    ref="password"
                    validator="true"
                    minCharacters="8"
                    requireCapitals="1"
                    requireNumbers="1"
                    value={this.state.passsword}
                    emptyMessage="Password is invalid"
                    onChange={this.handlePasswordInput}
                />
                <p>Confirm Password</p>
                <input
                    text="Confirm password"
                    ref="passwordConfirm"
                    type="password"
                    validate={this.isConfirmedPassword}
                    value={this.state.confirmPassword}
                    onChange={this.handleConfirmPasswordInput}
                    emptyMessage="Please confirm your password"
                    errorMessage="Passwords don't match"
                />
                <div className="submit-area">
                <button
                    type="submit"
                    className="button button-wide"
                    onClick={this.handleSubmit}>
                    CREATE ACCOUNT
                </button>
                <p>Already have an account?</p>
                <button type="submit" className="button button_wide" onClick={this.handleLogin}>Login</button>
                </div>

            </form>
        </div>
    }
}

// ReactDOM.render(<Signup />, document.getElementById('root'));