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
            window.location.href = "/dashboard";
        };

        _this.state = { username: '', email: '', password: '', passwordConfirm: '' };
        return _this;
    }

    _createClass(Signup, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'account_form' },
                React.createElement(
                    'div',
                    { className: 'account_title' },
                    React.createElement(
                        'h2',
                        null,
                        'Create account'
                    )
                ),
                React.createElement(
                    'form',
                    { className: 'form' },
                    React.createElement(
                        'p',
                        null,
                        'Username:'
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
                    React.createElement(
                        'p',
                        null,
                        'Email Address:'
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
                        'p',
                        null,
                        'Password:'
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
                        'Confirm Password:'
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
                        { className: 'submit_area' },
                        React.createElement(
                            'button',
                            {
                                type: 'submit',
                                className: 'button button_wide',
                                onClick: this.handleSubmit },
                            'CREATE ACCOUNT'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Already have an account?'
                        ),
                        React.createElement(
                            'a',
                            { href: '/login' },
                            'Login'
                        )
                    )
                )
            );
        }
    }]);

    return Signup;
}(React.Component);

// ReactDOM.render(<Signup />, document.getElementById('root'));


export default Signup;