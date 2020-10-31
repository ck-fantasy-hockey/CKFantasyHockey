class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: ''};
    }

    handlePasswordInput = (event) => {
        this.setState({ password: event.target.value });
    }


    handleUsernameInput = (event) => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return <div className="login_form">
            <h1>Login</h1>
            <form>
            <p>Username:</p>
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

                <p>Password:</p>
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
                <div className="submitbutton">
                <button
                    type="submit"
                    className="button button_wide"
                    onClick={this.handleSubmit}>
                    Login
                </button>
                </div>

            </form>
        </div>
    }
}


ReactDOM.render(<Login />, document.getElementById('root'));