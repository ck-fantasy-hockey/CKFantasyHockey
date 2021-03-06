var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
    _inherits(Signup, _React$Component);

    function Signup(props) {
        _classCallCheck(this, Signup);

        var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

        _this.handleEmailInput = function (event) {
            _this.setState({ email: event.target.value });
        };

        _this.handlePasswordInput = function (event) {
            _this.setState({ password: event.target.value });
        };

        _this.handleConfirmPasswordInput = function (event) {
            _this.setState({ passwordConfirm: event.target.value });
        };

        _this.handleUsernameInput = function (event) {
            _this.setState({ username: event.target.value });
        };

        _this.handleSubmit = function (event) {
            event.preventDefault();

            var userdata = _this.state;
            // check for blank fields
            var checkFields = _this.checkBlank(userdata);
            if (checkFields === false) {
                return;
            }
            // check for valid email
            var email = _this.emailValidate();
            if (email == false) {
                return;
            }
            // if password do not match it displays error
            var passMatch = _this.checkPasswords(userdata['password'], userdata['passwordConfirm']);
            if (passMatch === false) {
                return;
            }
            var url = "/submitsignup";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                // if username unique, redirects to login
                if (data['response'] === true) {
                    window.location.href = "/login";
                    // if username is taken displays error
                } else {
                    var element = React.createElement(
                        'p',
                        { className: 'incorrect-text' },
                        'Username taken'
                    );
                    ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
                }
            });
        };

        _this.checkBlank = function (userdata) {
            for (var property in userdata) {
                if (userdata[property].length === 0) {
                    var element = React.createElement(
                        'p',
                        { className: 'incorrect-text' },
                        'One or more fields are blank'
                    );
                    ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
                    return false;
                }
                return true;
            }
        };

        _this.emailValidate = function () {
            var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(_this.state.email) === false) {
                var element = React.createElement(
                    'p',
                    { className: 'incorrect-text' },
                    'Invalid email format'
                );
                ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[1]);
                return false;
            } else {
                return true;
            }
        };

        _this.checkPasswords = function (password1, password2) {
            if (password1 === password2) {
                return true;
            }
            var element = React.createElement(
                'p',
                { className: 'incorrect-text' },
                'Passwords do not match'
            );
            ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            return false;
        };

        _this.handleLogin = function (event) {
            event.preventDefault();
            window.location.href = "/login";
        };

        _this.state = { username: '', email: '', password: '', passwordConfirm: '' };
        return _this;
    }

    // handles submission of signup form


    // Confirms password match or not


    _createClass(Signup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'account-form' },
                React.createElement(
                    'div',
                    { className: 'account-title' },
                    React.createElement(
                        'h2',
                        null,
                        'Create account'
                    )
                ),
                React.createElement(
                    'form',
                    { className: 'form' },
                    React.createElement('div', { className: 'incorrect-creds' }),
                    React.createElement(
                        'p',
                        null,
                        'Username'
                    ),
                    React.createElement('input', {
                        text: 'Username',
                        ref: 'user',
                        type: 'text',
                        defaultValue: this.state.username,
                        value: this.state.username,
                        onChange: this.handleUsernameInput,
                        errorMessage: 'Email is invalid',
                        emptyMessage: 'Email can\'t be empty'
                    }),
                    React.createElement('div', { className: 'incorrect-creds' }),
                    React.createElement(
                        'p',
                        null,
                        'Email Address'
                    ),
                    React.createElement('input', {
                        text: 'Email Address',
                        ref: 'email',
                        type: 'email',
                        defaultValue: this.state.email,
                        value: this.state.email,
                        onChange: this.handleEmailInput,
                        errorMessage: 'Email is invalid',
                        emptyMessage: 'Email can\'t be empty'
                    }),
                    React.createElement(
                        'p',
                        null,
                        'Password'
                    ),
                    React.createElement('input', {
                        text: 'Password',
                        type: 'password',
                        ref: 'password',
                        validator: 'true',
                        minCharacters: '8',
                        requireCapitals: '1',
                        requireNumbers: '1',
                        value: this.state.passsword,
                        emptyMessage: 'Password is invalid',
                        onChange: this.handlePasswordInput
                    }),
                    React.createElement(
                        'p',
                        null,
                        'Confirm Password'
                    ),
                    React.createElement('input', {
                        text: 'Confirm password',
                        ref: 'passwordConfirm',
                        type: 'password',
                        validate: this.isConfirmedPassword,
                        value: this.state.confirmPassword,
                        onChange: this.handleConfirmPasswordInput,
                        emptyMessage: 'Please confirm your password',
                        errorMessage: 'Passwords don\'t match'
                    }),
                    React.createElement(
                        'div',
                        { className: 'submit-area' },
                        React.createElement(
                            'button',
                            {
                                type: 'submit',
                                className: 'button button-wide',
                                onClick: this.handleSubmit },
                            'CREATE ACCOUNT'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Already have an account?'
                        ),
                        React.createElement(
                            'button',
                            { type: 'submit', className: 'button button_wide', onClick: this.handleLogin },
                            'Login'
                        )
                    )
                )
            );
        }
    }]);

    return Signup;
}(React.Component);

export default Signup;