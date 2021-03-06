var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamInformation = function (_React$Component) {
    _inherits(TeamInformation, _React$Component);

    function TeamInformation(props) {
        _classCallCheck(this, TeamInformation);

        var _this = _possibleConstructorReturn(this, (TeamInformation.__proto__ || Object.getPrototypeOf(TeamInformation)).call(this, props));

        _this.state = _this.props.data.teamInformation;
        return _this;
    }

    _createClass(TeamInformation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'team_info' },
                React.createElement(
                    'div',
                    null,
                    React.createElement('img', { className: 'team_info_image', src: '/static/img/' + this.state.teamLogo })
                ),
                React.createElement(
                    'div',
                    { className: 'team_info_text' },
                    React.createElement(
                        'h1',
                        null,
                        this.state.teamName
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Created: ',
                        this.state.createdOn
                    ),
                    React.createElement(
                        'p',
                        null,
                        'League: ',
                        this.state.leagueName
                    ),
                    React.createElement(
                        'p',
                        null,
                        'League ID: ',
                        this.state.leagueID
                    )
                )
            );
        }
    }]);

    return TeamInformation;
}(React.Component);

export default TeamInformation;