var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import TeamInformationText from './team_info_text.js';

var TeamInformation = function (_React$Component) {
    _inherits(TeamInformation, _React$Component);

    function TeamInformation(props) {
        _classCallCheck(this, TeamInformation);

        var _this = _possibleConstructorReturn(this, (TeamInformation.__proto__ || Object.getPrototypeOf(TeamInformation)).call(this, props));

        _this.editAttributes = function () {
            _this.setState({ editingAttributes: !_this.state.editingAttributes });
        };

        _this.state = {
            editingAttributes: false
        };

        return _this;
    }

    _createClass(TeamInformation, [{
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
                        React.createElement("img", { className: "team-info-image", src: '/static/img/hockey1_unsplash.jpg' })
                    ),
                    React.createElement(
                        "div",
                        { className: "team-info-text" },
                        React.createElement(TeamInformationText, Object.assign({}, this.props, this.state))
                    )
                ),
                React.createElement(
                    "div",
                    { className: "team-info-subheader" },
                    React.createElement(
                        "button",
                        { className: "btn", onClick: this.editAttributes },
                        "Edit Team Attributes"
                    ),
                    React.createElement(
                        "button",
                        { className: "btn" },
                        "Delete Team"
                    )
                )
            );
        }
    }]);

    return TeamInformation;
}(React.Component);

export default TeamInformation;