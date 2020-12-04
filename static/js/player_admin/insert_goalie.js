var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertGoalie = function (_React$Component) {
    _inherits(InsertGoalie, _React$Component);

    function InsertGoalie() {
        _classCallCheck(this, InsertGoalie);

        return _possibleConstructorReturn(this, (InsertGoalie.__proto__ || Object.getPrototypeOf(InsertGoalie)).apply(this, arguments));
    }

    _createClass(InsertGoalie, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_text", type: "text", id: "name", name: "name" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_text", type: "text", id: "team", name: "team" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_text", type: "text", id: "status", name: "status" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_text", type: "text", id: "position", name: "position" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", type: "text", id: "gamesplayed", name: "gamesplayed" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", type: "text", id: "goals", name: "goals" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", type: "text", id: "assists", name: "assists" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", type: "text", id: "shutouts", name: "shutouts" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", type: "text", id: "goalsagainstaverage", name: "goalsagainstaverage" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", type: "text", id: "savepercentage", name: "savepercentage" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "button",
                        { className: "player_button" },
                        "Save"
                    )
                )
            );
        }
    }]);

    return InsertGoalie;
}(React.Component);

export default InsertGoalie;