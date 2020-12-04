var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditAccount = function (_React$Component) {
    _inherits(EditAccount, _React$Component);

    function EditAccount(props) {
        _classCallCheck(this, EditAccount);

        var _this = _possibleConstructorReturn(this, (EditAccount.__proto__ || Object.getPrototypeOf(EditAccount)).call(this, props));

        _this.emailInput = function () {
            _this.setState({ email: '' });
        };

        _this.blurEmail = function () {
            _this.setState({ emailgrey: true });
        };

        _this.handleEmailInput = function (event) {
            _this.setState({ emailgrey: false });
            _this.setState({ email: event.target.value });
        };

        _this.handleCancel = function (event) {
            event.preventDefault();
            window.location.href = "/dashboard?token=" + localStorage.getItem('usertoken');
        };

        _this.handlePasswordInput = function (event) {
            _this.setState({ password: event.target.value });
        };

        _this.handleConfirmPasswordInput = function (event) {
            _this.setState({ passwordConfirm: event.target.value });
        };

        _this.handleEmailSubmit = function (event) {
            event.preventDefault();
            var userdata = _this.state;
            var validateEmail = _this.emailValidate(_this.state.email);
            if (validateEmail == false) {
                return;
            }
            var url = "/update-email";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                _this.setState({ email: data.email });
                _this.setState({ emailgrey: true });
                var element = React.createElement(
                    'h3',
                    { className: 'email-response' },
                    'email updated'
                );
                ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
            });
        };

        _this.handlePasswordSubmit = function (event) {
            event.preventDefault();
            var userdata = _this.state;
            var passMatch = _this.checkPasswords(userdata['password'], userdata['passwordConfirm']);
            // if password do not match it displays error
            if (passMatch === false) {
                var element = React.createElement(
                    'h3',
                    { className: 'password-match' },
                    'Passwords do not match'
                );
                ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
                return;
            }
            var url = "/update-password";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                var element = React.createElement(
                    'h3',
                    { className: 'email-response' },
                    'password updated'
                );
                ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
                _this.setState({ password: '' });
                _this.setState({ passwordConfirm: '' });
            });
        };

        _this.emailValidate = function () {
            var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(_this.state.email) === false) {
                var element = React.createElement(
                    'h3',
                    { className: 'password-match' },
                    'Invalid email format'
                );
                ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
                return false;
            } else {
                return true;
            }
        };

        _this.checkPasswords = function (password1, password2) {
            if (password1 === password2) {
                return true;
            }
            return false;
        };

        _this.state = { username: dataFromServer.username,
            email: dataFromServer.email,
            password: '',
            passwordConfirm: '',
            emailgrey: true };
        return _this;
    }

    _createClass(EditAccount, [{
        key: 'render',
        value: function render() {
            var emailgrey = this.state.emailgrey;

            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(
                    'div',
                    { className: 'account-form' },
                    React.createElement(
                        'div',
                        { className: 'account-title' },
                        React.createElement(
                            'h2',
                            null,
                            'Edit Account'
                        )
                    ),
                    React.createElement(
                        'form',
                        { className: 'form' },
                        React.createElement('div', { className: 'incorrect-creds' }),
                        React.createElement(
                            'p',
                            null,
                            'Email Address'
                        ),
                        React.createElement('input', {
                            className: emailgrey ? "email-grey" : "",
                            text: 'Email Address',
                            ref: 'email',
                            type: 'text',
                            defaultValue: this.state.email,
                            value: this.state.email,
                            onChange: this.handleEmailInput,
                            onFocus: this.emailInput
                            // onBLur={this.blurEmail}
                            , errorMessage: 'Email is invalid',
                            emptyMessage: 'Email can\'t be empty'
                        }),
                        React.createElement(
                            'button',
                            {
                                type: 'submit',
                                className: 'button button-wide',
                                onClick: this.handleEmailSubmit },
                            'UPDATE EMAIL'
                        ),
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
                            value: this.state.password,
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
                            value: this.state.passwordConfirm,
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
                                    onClick: this.handlePasswordSubmit },
                                'UPDATE PASSWORD'
                            ),
                            React.createElement(
                                'div',
                                { className: 'cancel-button' },
                                React.createElement(
                                    'p',
                                    null,
                                    'Return to dashboard'
                                ),
                                React.createElement(
                                    'button',
                                    { type: 'submit', className: 'button button_wide', onClick: this.handleCancel },
                                    'Return'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditAccount;
}(React.Component);

ReactDOM.render(React.createElement(EditAccount, null), document.getElementById('root'));