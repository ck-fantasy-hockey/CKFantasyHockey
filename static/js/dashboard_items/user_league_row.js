var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserLeagueRow = function (_React$Component) {
    _inherits(UserLeagueRow, _React$Component);

    function UserLeagueRow() {
        _classCallCheck(this, UserLeagueRow);

        return _possibleConstructorReturn(this, (UserLeagueRow.__proto__ || Object.getPrototypeOf(UserLeagueRow)).apply(this, arguments));
    }

    _createClass(UserLeagueRow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'a',
                        { href: '/league-view' },
                        React.createElement(
                            'button',
                            null,
                            'View'
                        )
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.leagueID
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.name
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.teams
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.seasonEndDate
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.leader
                )
            );
        }
    }]);

    return UserLeagueRow;
}(React.Component);

export default UserLeagueRow;