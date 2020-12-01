var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PlayerFunctions from "./player_functions.js";

var GoalieRow = function (_React$Component) {
    _inherits(GoalieRow, _React$Component);

    function GoalieRow(props) {
        _classCallCheck(this, GoalieRow);

        return _possibleConstructorReturn(this, (GoalieRow.__proto__ || Object.getPrototypeOf(GoalieRow)).call(this, props));
    }

    _createClass(GoalieRow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    this.props.playerName
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-sm-and-down' },
                    this.props.team
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-med-and-down' },
                    this.props.status
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-med-and-down' },
                    this.props.playerID
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-sm-and-down' },
                    this.props.gamesPlayed
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-med-and-down' },
                    this.props.goals
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-med-and-down' },
                    this.props.assists
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-lg-and-down' },
                    this.props.points
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-lg-and-down' },
                    this.props.wins
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-lg-and-down' },
                    this.props.losses
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-lg-and-down' },
                    this.props.overtimeLosses
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-lg-and-down' },
                    this.props.shutOuts
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-sm-and-down' },
                    this.props.goalsAllowedAverage
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-lg-and-down' },
                    this.props.goalsAllowed
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-lg-and-down' },
                    this.props.saves
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-sm-and-down' },
                    this.props.savePercentage
                ),
                React.createElement(
                    'td',
                    { className: 'hide-on-lg-and-down' },
                    this.props.minutesPlayed
                ),
                React.createElement(
                    'td',
                    null,
                    React.createElement(PlayerFunctions, this.props)
                )
            );
        }
    }]);

    return GoalieRow;
}(React.Component);

export default GoalieRow;