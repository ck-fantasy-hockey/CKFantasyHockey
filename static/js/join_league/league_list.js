var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import data from '../../json/data.js';
import LeagueRow from './league_row.js';

var LeagueList = function (_React$Component) {
    _inherits(LeagueList, _React$Component);

    function LeagueList(props) {
        _classCallCheck(this, LeagueList);

        var _this = _possibleConstructorReturn(this, (LeagueList.__proto__ || Object.getPrototypeOf(LeagueList)).call(this, props));

        _this.state = {
            leagues: data.leagues
        };
        return _this;
    }

    _createClass(LeagueList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'roster' },
                React.createElement(
                    'div',
                    { className: 'roster_title' },
                    React.createElement(
                        'h2',
                        null,
                        'Leagues'
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
                                'ID'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Teams'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Visibility'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Season Ends'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Functions'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.state.leagues.map(function (element) {
                            return React.createElement(LeagueRow, Object.assign({ key: element.leagueID }, element));
                        })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'roster-instructions' },
                    React.createElement(
                        'p',
                        null,
                        'View the all leagues above and click \'JOIN\' on a league you wish to create a team in.'
                    )
                )
            );
        }
    }]);

    return LeagueList;
}(React.Component);

export default LeagueList;