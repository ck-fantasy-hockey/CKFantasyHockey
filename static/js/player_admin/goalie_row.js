var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoalieRow = function (_React$Component) {
    _inherits(GoalieRow, _React$Component);

    function GoalieRow() {
        _classCallCheck(this, GoalieRow);

        return _possibleConstructorReturn(this, (GoalieRow.__proto__ || Object.getPrototypeOf(GoalieRow)).apply(this, arguments));
    }

    _createClass(GoalieRow, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    this.props.playerID
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.playerName
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.team
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.status
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.position
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.goals
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.assists
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.points
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.gameWinningGoals
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.penaltyMinutes
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.minutesPlayed
                ),
                React.createElement(
                    "td",
                    null,
                    this.props.blocks
                )
            );
        }
    }]);

    return GoalieRow;
}(React.Component);

export default GoalieRow;