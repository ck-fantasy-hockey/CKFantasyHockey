var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerChosenRow = function (_React$Component) {
    _inherits(PlayerChosenRow, _React$Component);

    function PlayerChosenRow(props) {
        _classCallCheck(this, PlayerChosenRow);

        var _this = _possibleConstructorReturn(this, (PlayerChosenRow.__proto__ || Object.getPrototypeOf(PlayerChosenRow)).call(this, props));

        _this.handleDeselectPlayer = function () {
            var player = _this.state.player;
            _this.props.deselectPlayer(player);
        };

        _this.state = {
            player: _this.props.player
        };
        return _this;
    }

    _createClass(PlayerChosenRow, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    this.state.player.playerID
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.player.playerName
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.player.position
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.player.goals
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.player.assists
                ),
                React.createElement(
                    "td",
                    null,
                    this.state.player.points
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "button",
                        { className: "btn", onClick: this.handleDeselectPlayer },
                        "Remove"
                    )
                )
            );
        }
    }]);

    return PlayerChosenRow;
}(React.Component);

export default PlayerChosenRow;