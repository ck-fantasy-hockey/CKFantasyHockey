var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// window.history.replaceState({}, document.title, "/account-page");

var EditAccount = function (_React$Component) {
    _inherits(EditAccount, _React$Component);

    function EditAccount(props) {
        _classCallCheck(this, EditAccount);

        var _this = _possibleConstructorReturn(this, (EditAccount.__proto__ || Object.getPrototypeOf(EditAccount)).call(this, props));

        _this.handleEmailInput = function (event) {
            _this.setState({ email: event.target.value });
        };

        _this.handleCancel = function (event) {
            event.preventDefault();
            window.location.href = "/dashboard?token=" + localStorage.getItem('usertoken');
        };

        _this.handleEmailSubmit = function (event) {
            event.preventDefault();
            var userdata = _this.state;
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
                console.log(data);
                // this.setState(data)
            });
        };

        _this.state = { username: '', email: 'test@test.com', password: '', passwordConfirm: '' };
        return _this;
    }

    _createClass(EditAccount, [{
        key: 'render',
        value: function render() {
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
                            text: 'Email Address',
                            ref: 'email',
                            type: 'text',
                            defaultValue: this.state.email,
                            value: this.state.email,
                            onChange: this.handleEmailInput,
                            errorMessage: 'Email is invalid',
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