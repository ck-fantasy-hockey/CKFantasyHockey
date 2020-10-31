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
        const userdata = this.state
        const url = "/checklogin"
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
                window.location.href = "/";
            } else {
                // return error
            }
        })
    }


    render() {
        return <div className="account_form">
           <div className="account_title"><h2>Login</h2></div>
            <form className="form">
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
                <div className="submit_area">
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