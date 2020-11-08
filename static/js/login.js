var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.handlePasswordInput = function (event) {
            _this.setState({ password: event.target.value });
        };

        _this.handleUsernameInput = function (event) {
            _this.setState({ username: event.target.value });
        };

        _this.handleSubmit = function (event) {
            event.preventDefault();
            var userdata = _this.state;
            var url = "/checklogin";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if (data['response'] === true) {
                    window.location.href = "/dashboard";
                } else {
                    // return error
                }
            });
        };

        _this.state = { username: '', password: '' };
        return _this;
    }

    _createClass(Login, [{
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
                            'Login'
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
                            value: this.state.password,
                            emptyMessage: 'Password is invalid',
                            onChange: this.handlePasswordInput
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
                                'Login'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);

ReactDOM.render(React.createElement(Login, null), document.getElementById('root'));