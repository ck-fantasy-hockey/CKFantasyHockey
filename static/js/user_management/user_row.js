var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserRow = function (_React$Component) {
    _inherits(UserRow, _React$Component);

    function UserRow(props) {
        _classCallCheck(this, UserRow);

        return _possibleConstructorReturn(this, (UserRow.__proto__ || Object.getPrototypeOf(UserRow)).call(this, props));
    }

    _createClass(UserRow, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    this.props.userID
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.email
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-sm-and-down' },
                    this.props.password
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-med-and-down' },
                    this.props.sessionID
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-med-and-down' },
                    this.props.sessionExpires
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'button',
                        { onClick: function onClick() {
                                _this2.props.deleteUser(_this2.props.userID);
                            } },
                        'Delete'
                    ),
                    React.createElement(
                        'button',
                        null,
                        'Reset Password'
                    )
                )
            );
        }
    }]);

    return UserRow;
}(React.Component);

export default UserRow;