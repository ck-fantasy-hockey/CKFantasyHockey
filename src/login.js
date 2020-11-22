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
                let token = data['token']
                localStorage.setItem('usertoken', token)
                window.location.href = "/dashboard?token="+localStorage.getItem('usertoken');
            } else {
                const element = <p className="incorrect-text">Username or password is incorrect</p>;
                ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            }
        })
    }

    handleSignup = (event) => {
        event.preventDefault();
        window.location.href = "/";
    }


    render() {
        return <div className='background-filter'>
            <div className="account-form">
           <div className="account-title"><h2>Login</h2></div>
            <form className="form">
            <div className="incorrect-creds"></div>
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
                    value={this.state.password}
                    emptyMessage="Password is invalid"
                    onChange={this.handlePasswordInput}
                />
                <div className="submit-area">
                <button
                    type="submit"
                    className="button button_wide"
                    onClick={this.handleSubmit}>
                    Login
                </button>
                <p>Don't have an account?</p>
                <button type="submit" className="button button_wide" onClick={this.handleSignup}>Signup</button>
                </div>

            </form>
        </div>
    </div>
    }
}


ReactDOM.render(<Login />, document.getElementById('root'));