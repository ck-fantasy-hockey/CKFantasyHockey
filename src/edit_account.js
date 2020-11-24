// window.history.replaceState({}, document.title, "/account-page");

class EditAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: dataFromServer.username,
            email: dataFromServer.email,
            password: '',
            passwordConfirm: '',
            emailgrey: true };
    }

    emailInput = () => {
        this.setState({email: ''})
    }

    blurEmail = () => {
        this.setState({emailgrey: true})
    } 

    handleEmailInput = (event) => {
        this.setState({emailgrey: false})
        this.setState({ email: event.target.value });
    }

    handleCancel = (event) => {
        event.preventDefault();
        window.location.href = "/dashboard?token="+localStorage.getItem('usertoken');
    }

    handlePasswordInput = (event) => {
        this.setState({password: event.target.value})
    }

    handleConfirmPasswordInput = (event) => {
        this.setState({passwordConfirm: event.target.value})
    }

    handleEmailSubmit = (event) => { 
        event.preventDefault();
        const userdata = this.state
        const url = "/update-email"
        fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(userdata)
        })
        .then((response) => response.json())
        .then(data => {
            this.setState({email: data.email})
            this.setState({emailgrey: true})
            const element = <h3 className="email-response">email updated</h3>;
            ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
        })
    }

    handlePasswordSubmit = (event) => {
        event.preventDefault();
        const userdata = this.state
        let passMatch = this.checkPasswords(userdata['password'], userdata['passwordConfirm'])
        // if password do not match it displays error
        if (passMatch === false) {
            const element = <h3 className="password-match">Passwords do not match</h3>;
            ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            return
        }
        const url = "/update-password"
        fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(userdata)
        })
        .then((response) => response.json())
        .then(data => {
            const element = <h3 className="email-response">password updated</h3>;
            ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            this.setState({password: ''})
            this.setState({passwordConfirm: ''})
        })
    }

    checkPasswords = (password1, password2) =>{
        if (password1 === password2) {
            return true
        }
        return false
    }

    render() {
        const{ emailgrey } = this.state;
        return <div className='background-filter'>
            <div className="account-form">
            <div className="account-title"><h2>Edit Account</h2></div>
            <form className="form">
            <div className="incorrect-creds"></div>
                <p>Email Address</p>
                <input
                    className={(emailgrey? "email-grey":"")}
                    text="Email Address"
                    ref="email"
                    type="text"
                    defaultValue={this.state.email}
                    value={this.state.email}
                    onChange={this.handleEmailInput}
                    onFocus={this.emailInput}
                    // onBLur={this.blurEmail}
                    errorMessage="Email is invalid"
                    emptyMessage="Email can't be empty"
                />
                <button
                    type="submit"
                    className="button button-wide"
                    onClick={this.handleEmailSubmit}>
                    UPDATE EMAIL
                </button>

                <p>Password</p>
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
                <p>Confirm Password</p>
                <input
                    text="Confirm password"
                    ref="passwordConfirm"
                    type="password"
                    validate={this.isConfirmedPassword}
                    value={this.state.passwordConfirm}
                    onChange={this.handleConfirmPasswordInput}
                    emptyMessage="Please confirm your password"
                    errorMessage="Passwords don't match"
                />
                <div className="submit-area">
                <button
                    type="submit"
                    className="button button-wide"
                    onClick={this.handlePasswordSubmit}>
                    UPDATE PASSWORD
                </button>
                <div className="cancel-button">
                    <p>Return to dashboard</p>
                    <button type="submit" className="button button_wide" onClick={this.handleCancel}>Return</button>
                </div>
                </div>

            </form>
        </div>
        </div>
    }
}

ReactDOM.render(<EditAccount />, document.getElementById('root'));