var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NavBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call.apply(_ref, [this].concat(args))), _this), _this.handleDashboard = function () {
            window.location.href = "/dashboard?token=" + localStorage.getItem('usertoken');
        }, _this.handleJoinLeague = function () {
            window.location.href = "/join-league?token=" + localStorage.getItem('usertoken');
        }, _this.handleLogout = function () {
            localStorage.setItem('usertoken', "");
            window.location.href = "/login";
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "nav",
                { className: "nav-bar" },
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "div",
                        { className: "nav-logo" },
                        React.createElement(
                            "div",
                            { className: "title-initials" },
                            React.createElement(
                                "span",
                                null,
                                "CK"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "nav-item" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "button",
                                { type: "submit", onClick: this.handleDashboard },
                                "User Dashboard"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "nav-item" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "button",
                                { type: "submit", onClick: this.handleJoinLeague },
                                "Join League"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "nav-item right" },
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "button",
                                { type: "submit", onClick: this.handleLogout },
                                "Logout"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NavBar;
}(React.Component);

export default NavBar;