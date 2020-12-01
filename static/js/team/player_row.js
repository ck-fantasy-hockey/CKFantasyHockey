var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PlayerFunctions from './player_functions.js';

var PlayerRow = function (_React$Component) {
    _inherits(PlayerRow, _React$Component);

    function PlayerRow(props) {
        _classCallCheck(this, PlayerRow);

        var _this = _possibleConstructorReturn(this, (PlayerRow.__proto__ || Object.getPrototypeOf(PlayerRow)).call(this, props));

        _this.abbreviate = function (string) {
            var stringWords = string.split(" ");
            var abbreviation = "";
            stringWords.forEach(function (word) {
                abbreviation += word[0];
            });
            abbreviation.toUpperCase();
            return abbreviation;
        };

        return _this;
    }

    // Takes any string and returns the first letter of each in a 
    // new string all uppercased


    _createClass(PlayerRow, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    this.props.playerName
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-sm-and-down" },
                    this.abbreviate(this.props.team)
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-med-and-down" },
                    this.props.status
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-med-and-down" },
                    this.props.playerID
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-sm-and-down" },
                    this.abbreviate(this.props.position)
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-med-and-down" },
                    this.props.gamesPlayed
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-sm-and-down" },
                    this.props.goals
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-sm-and-down" },
                    this.props.assists
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-lg-and-down" },
                    this.props.points
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-lg-and-down" },
                    this.props.shootoutGoals
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-lg-and-down" },
                    this.props.hatTricks
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-med-and-down" },
                    this.props.plusMinus
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-lg-and-down" },
                    this.props.pointsPerGame
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-lg-and-down" },
                    this.props.shorthandedGoals
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-lg-and-down" },
                    this.props.penaltyMinutes
                ),
                React.createElement(
                    "td",
                    { className: "hide-on-lg-and-down" },
                    this.props.blocks
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(PlayerFunctions, this.props)
                )
            );
        }
    }]);

    return PlayerRow;
}(React.Component);

export default PlayerRow;