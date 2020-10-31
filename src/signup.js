

class Signup extends React.Component {
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
        console.log(this.state);
    }

    render() {
        return <div className="create_account_form">
            <h1>Create account</h1>
            <form>
            Username:
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

                Email Address:
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
                Password:
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
                Confirm Password:
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

                <button
                    type="submit"
                    className="button button_wide"
                    onClick={this.handleSubmit}>
                    CREATE ACCOUNT
                </button>

                Already have an account?
                <a href='/login'>Login</a>

            </form>
        </div>
    }
}

ReactDOM.render(<Signup />, document.getElementById('root'));