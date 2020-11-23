// window.history.replaceState({}, document.title, "/account-page");

class EditAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', email: 'test@test.com', password: '', passwordConfirm: '' };
    }

    handleEmailInput = (event) => {
        this.setState({ email: event.target.value });
    }

    handleCancel = (event) => {
        event.preventDefault();
        window.location.href = "/dashboard?token="+localStorage.getItem('usertoken');
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
            console.log(data)
            // this.setState(data)
        })
    }

    render() {
        return <div className='background-filter'>
            <div className="account-form">
            <div className="account-title"><h2>Edit Account</h2></div>
            <form className="form">
            <div className="incorrect-creds"></div>
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