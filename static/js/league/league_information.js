var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeagueInformation = function (_React$Component) {
    _inherits(LeagueInformation, _React$Component);

    function LeagueInformation(props) {
        _classCallCheck(this, LeagueInformation);

        return _possibleConstructorReturn(this, (LeagueInformation.__proto__ || Object.getPrototypeOf(LeagueInformation)).call(this, props));
    }

    _createClass(LeagueInformation, [{
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
                        React.createElement("img", { className: "team-info-image", src: "/static/img/user-photo.png" })
                    ),
                    React.createElement(
                        "div",
                        { className: "team-info-text" },
                        React.createElement(
                            "h1",
                            null,
                            "League: ",
                            this.props.data[1]
                        ),
                        React.createElement(
                            "p",
                            null,
                            "League ID: ",
                            this.props.data[0]
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Teams: ",
                            this.props.data[2]
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Season End Date: ",
                            this.props.data[3]
                        )
                    )
                )
            );
        }
    }]);

    return LeagueInformation;
}(React.Component);

export default LeagueInformation;