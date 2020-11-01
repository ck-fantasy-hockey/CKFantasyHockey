var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import TeamRow from './team_row.js';

var Teams = function (_React$Component) {
    _inherits(Teams, _React$Component);

    function Teams(props) {
        _classCallCheck(this, Teams);

        var _this = _possibleConstructorReturn(this, (Teams.__proto__ || Object.getPrototypeOf(Teams)).call(this, props));

        _this.sortByRank = function () {
            _this.state.teams.sort(function (a, b) {
                return a.rank < b.rank ? -1 : 1;
            });
        };

        _this.state = {
            teams: _this.props.data.leagueInformation
        };
        return _this;
    }

    _createClass(Teams, [{
        key: 'render',
        value: function render() {
            this.sortByRank();
            return React.createElement(
                'div',
                { className: 'roster' },
                React.createElement(
                    'div',
                    { className: 'roster_title' },
                    React.createElement(
                        'h2',
                        null,
                        'Teams'
                    )
                ),
                React.createElement(
                    'table',
                    null,
                    React.createElement(
                        'thead',
                        null,
                        React.createElement(
                            'tr',
                            null,
                            React.createElement(
                                'th',
                                null,
                                'Rank'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Team ID'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'User'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Wins'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Losses'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.state.teams.map(function (element) {
                            return React.createElement(TeamRow, Object.assign({ key: element.teamID }, element));
                        })
                    )
                )
            );
        }
    }]);

    return Teams;
}(React.Component);

export default Teams;