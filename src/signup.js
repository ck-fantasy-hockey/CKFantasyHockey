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

    // handles submission of signup form
    handleSubmit = (event) => {
        event.preventDefault();
        const userdata = this.state
        let passMatch = this.checkPasswords(userdata['password'], userdata['passwordConfirm'])
        // if password do not match it displays error
        if (passMatch === false) {
            const element = <p className="incorrect-text">Passwords do not match</p>;
            ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            return
        }
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
            // if username unique, redirects to login
            if (data['response'] === true) {
                window.location.href = "/login";
            // if username is taken displays error
            } else {
                const element = <p className="incorrect-text">Username taken</p>;
                ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            }
        })
    }

    // Confirms password match
    checkPasswords = (password1, password2) =>{
        if (password1 === password2) {
            return true
        }
        return false
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
