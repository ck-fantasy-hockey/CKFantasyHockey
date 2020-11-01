var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeagueInformation = function (_React$Component) {
    _inherits(LeagueInformation, _React$Component);

    function LeagueInformation(props) {
        _classCallCheck(this, LeagueInformation);

        var _this = _possibleConstructorReturn(this, (LeagueInformation.__proto__ || Object.getPrototypeOf(LeagueInformation)).call(this, props));

        _this.state = _this.props.data.leagues[0];
        return _this;
    }

    _createClass(LeagueInformation, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "team_info" },
                React.createElement(
                    "div",
                    { className: "team_info_text" },
                    React.createElement(
                        "h1",
                        null,
                        "League: ",
                        this.state.name
                    ),
                    React.createElement(
                        "p",
                        null,
                        "League ID: ",
                        this.state.leagueID
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Teams: ",
                        this.state.teams
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Season End Date: ",
                        this.state.seasonEndDate
                    )
                )
            );
        }
    }]);

    return LeagueInformation;
}(React.Component);

export default LeagueInformation;