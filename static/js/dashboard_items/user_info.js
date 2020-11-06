var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_React$Component) {
    _inherits(UserInfo, _React$Component);

    function UserInfo(props) {
        _classCallCheck(this, UserInfo);

        var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));

        _this.state = _this.props.data.userInfo;
        return _this;
    }

    _createClass(UserInfo, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "team-info" },
                React.createElement(
                    "div",
                    { className: "team-info-primary" },
                    React.createElement(
                        "div",
                        { className: "team-info-header" },
                        React.createElement("img", { className: "team-info-image", src: '/static/img/' + this.state.userAvatar })
                    ),
                    React.createElement(
                        "div",
                        { className: "team-info-text" },
                        React.createElement(
                            "h1",
                            null,
                            this.state.userName
                        ),
                        React.createElement(
                            "p",
                            null,
                            "User ID: ",
                            this.state.userID
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Email: ",
                            this.state.email
                        ),
                        React.createElement(
                            "p",
                            null,
                            "No. of Teams: ",
                            this.state.teams
                        ),
                        React.createElement(
                            "p",
                            null,
                            "League Wins: ",
                            this.state.leagueWins
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "team-info-subheader" },
                    React.createElement("a", { href: "/account-page" }),
                    React.createElement(
                        "button",
                        { className: "btn" },
                        "Edit Account"
                    )
                )
            );
        }
    }]);

    return UserInfo;
}(React.Component);

export default UserInfo;