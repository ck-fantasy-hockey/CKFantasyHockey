var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import TeamAttributesForm from './team_attributes_form.js';

var TeamAttributes = function (_React$Component) {
    _inherits(TeamAttributes, _React$Component);

    function TeamAttributes() {
        _classCallCheck(this, TeamAttributes);

        return _possibleConstructorReturn(this, (TeamAttributes.__proto__ || Object.getPrototypeOf(TeamAttributes)).apply(this, arguments));
    }

    _createClass(TeamAttributes, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "team_info" },
                React.createElement(
                    "div",
                    null,
                    React.createElement("i", { className: "fas fa-hockey-puck" })
                ),
                React.createElement(
                    "div",
                    { className: "team_info_text" },
                    React.createElement(TeamAttributesForm, null)
                )
            );
        }
    }]);

    return TeamAttributes;
}(React.Component);

export default TeamAttributes;