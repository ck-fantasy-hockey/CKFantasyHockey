var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayerFunctions = function (_React$Component) {
    _inherits(PlayerFunctions, _React$Component);

    function PlayerFunctions() {
        _classCallCheck(this, PlayerFunctions);

        return _possibleConstructorReturn(this, (PlayerFunctions.__proto__ || Object.getPrototypeOf(PlayerFunctions)).apply(this, arguments));
    }

    _createClass(PlayerFunctions, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { className: "btn" },
                    React.createElement(
                        "div",
                        { className: "tooltip" },
                        React.createElement(
                            "span",
                            { className: "tooltiptext" },
                            "Drop Player"
                        ),
                        React.createElement("i", { className: "fas fa-arrow-down" })
                    )
                ),
                React.createElement(
                    "button",
                    { className: "btn" },
                    React.createElement(
                        "div",
                        { className: "tooltip" },
                        React.createElement(
                            "span",
                            { className: "tooltiptext" },
                            "Trade Player"
                        ),
                        React.createElement("i", { className: "fas fa-arrows-alt-h" })
                    )
                ),
                React.createElement(
                    "button",
                    { className: "btn" },
                    React.createElement(
                        "div",
                        { className: "tooltip" },
                        React.createElement(
                            "span",
                            { className: "tooltiptext" },
                            "Bench Player"
                        ),
                        React.createElement("i", { className: "fas fa-couch" })
                    )
                )
            );
        }
    }]);

    return PlayerFunctions;
}(React.Component);

export default PlayerFunctions;