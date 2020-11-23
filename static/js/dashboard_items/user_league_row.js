var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserLeagueRow = function (_React$Component) {
    _inherits(UserLeagueRow, _React$Component);

    function UserLeagueRow() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserLeagueRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserLeagueRow.__proto__ || Object.getPrototypeOf(UserLeagueRow)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeagueView = function () {
            window.location.href = "/league-view?token=" + localStorage.getItem('usertoken') + "&leagueid=" + _this.props[0];
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserLeagueRow, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "button",
                        { onClick: this.handleLeagueView },
                        "View"
                    )
                ),
                React.createElement(
                    "td",
                    null,
                    this.props[0]
                ),
                React.createElement(
                    "td",
                    null,
                    this.props[1]
                ),
                React.createElement(
                    "td",
                    null,
                    this.props[3]
                ),
                React.createElement(
                    "td",
                    null,
                    this.props[2]
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.leader
                )
            );
        }
    }]);

    return UserLeagueRow;
}(React.Component);

export default UserLeagueRow;