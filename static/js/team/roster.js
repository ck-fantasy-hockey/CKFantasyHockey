var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Roster = function (_React$Component) {
    _inherits(Roster, _React$Component);

    function Roster(props) {
        _classCallCheck(this, Roster);

        var _this = _possibleConstructorReturn(this, (Roster.__proto__ || Object.getPrototypeOf(Roster)).call(this, props));

        _this.state = {
            1: {
                playerID: "1",
                name: "Henrik Lundqvist",
                postion: "G",
                wins: "54",
                losses: "18",
                points: "105"
            },
            2: {
                playerID: "2",
                name: "Ron Hextall",
                position: "G",
                wins: "78",
                losses: "23",
                points: "178"
            }
        };
        return _this;
    }

    _createClass(Roster, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "table",
                null,
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "Player ID"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Name"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Position"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Wins"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Losses"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Points"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "1"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "Henrik Lundqvist"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "G"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "54"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "18"
                        ),
                        React.createElement(
                            "td",
                            null,
                            "105"
                        )
                    )
                )
            );
        }
    }]);

    return Roster;
}(React.Component);

export default Roster;