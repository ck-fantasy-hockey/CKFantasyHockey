var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeagueRow = function (_React$Component) {
    _inherits(LeagueRow, _React$Component);

    function LeagueRow() {
        _classCallCheck(this, LeagueRow);

        return _possibleConstructorReturn(this, (LeagueRow.__proto__ || Object.getPrototypeOf(LeagueRow)).apply(this, arguments));
    }

    _createClass(LeagueRow, [{
        key: 'joinLeagueButton',
        value: function joinLeagueButton() {
            if (this.props.joinable) {
                return React.createElement(
                    'a',
                    { href: '/create-team?leagueID=' + this.props.leagueID + '&token=' + localStorage.getItem('usertoken') },
                    React.createElement(
                        'button',
                        { className: 'btn btn-join' },
                        'JOIN'
                    )
                );
            } else {
                return React.createElement(
                    'span',
                    { className: 'league-closed' },
                    'CLOSED'
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    { className: 'narrow hide-on-sm-and-down' },
                    this.props.leagueID
                ),
                React.createElement(
                    'td',
                    { className: 'wide' },
                    this.props.name
                ),
                React.createElement(
                    'td',
                    { className: 'wide hide-on-sm-and-down' },
                    this.props.teams
                ),
                React.createElement(
                    'td',
                    { className: 'wide hide-on-sm-and-down' },
                    this.props.visibility
                ),
                React.createElement(
                    'td',
                    { className: 'narrow' },
                    this.props.seasonEndDate
                ),
                React.createElement(
                    'td',
                    { className: 'narrow' },
                    this.joinLeagueButton()
                )
            );
        }
    }]);

    return LeagueRow;
}(React.Component);

export default LeagueRow;