var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import UserTeamRow from './user_team_row.js';

var UserTeams = function (_React$Component) {
    _inherits(UserTeams, _React$Component);

    function UserTeams(props) {
        _classCallCheck(this, UserTeams);

        return _possibleConstructorReturn(this, (UserTeams.__proto__ || Object.getPrototypeOf(UserTeams)).call(this, props));
    }

    _createClass(UserTeams, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'roster' },
                React.createElement(
                    'div',
                    { className: 'roster-title' },
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
                                { className: 'team-functions' },
                                '  '
                            ),
                            React.createElement(
                                'th',
                                { className: 'hide-on-sm-and-down' },
                                'Team ID'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Team'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Rank'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Wins'
                            ),
                            React.createElement(
                                'th',
                                { className: 'hide-on-sm-and-down' },
                                'Losses'
                            ),
                            React.createElement(
                                'th',
                                { className: 'hide-on-sm-and-down' },
                                'Created On'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'League Name'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.props.data.team_info.map(function (element) {
                            return React.createElement(UserTeamRow, Object.assign({ key: element[0] }, element));
                        })
                    )
                )
            );
        }
    }]);

    return UserTeams;
}(React.Component);

export default UserTeams;