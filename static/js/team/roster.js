var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PlayerRow from './player_row.js';
import GoalieRow from './goalie_row.js';

var Roster = function (_React$Component) {
    _inherits(Roster, _React$Component);

    function Roster(props) {
        _classCallCheck(this, Roster);

        return _possibleConstructorReturn(this, (Roster.__proto__ || Object.getPrototypeOf(Roster)).call(this, props));
    }

    _createClass(Roster, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'roster' },
                React.createElement(
                    'div',
                    { className: 'roster-title' },
                    React.createElement(
                        'h2',
                        null,
                        'Roster'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'roster-section' },
                    React.createElement(
                        'span',
                        null,
                        'Players'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'player-table' },
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
                                    { className: 'wide' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Name'
                                        ),
                                        'Name'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'wide hide-on-sm-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'NHL Team'
                                        ),
                                        'NHL Team'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'wide hide-on-med-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Status'
                                        ),
                                        'Status'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-med-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Player ID'
                                        ),
                                        'ID'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-sm-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Position'
                                        ),
                                        'POS'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-med-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Games Played'
                                        ),
                                        'GP'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-sm-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Goals'
                                        ),
                                        'G'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-sm-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Assists'
                                        ),
                                        'A'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Points'
                                        ),
                                        'P'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Shootout Goals'
                                        ),
                                        'SHG'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Hat Tricks'
                                        ),
                                        'HT'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-med-and-down' },
                                    '+/-'
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Points Per Game'
                                        ),
                                        'PPG'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Shorthanded Goals'
                                        ),
                                        'SHG'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Penalty Minutes'
                                        ),
                                        'PIM'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Blocks'
                                        ),
                                        'B'
                                    )
                                ),
                                React.createElement('th', { className: 'wide player-functions' })
                            )
                        ),
                        React.createElement(
                            'tbody',
                            null,
                            this.props.players.map(function (element) {
                                if (element.position !== "Goalie") return React.createElement(PlayerRow, Object.assign({ key: element.playerID }, element, { functions: _this2.props.functions }));
                            })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'roster-section' },
                    React.createElement(
                        'span',
                        null,
                        'Goalies'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'goalie-table' },
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
                                    { className: 'wide' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Name'
                                        ),
                                        'Name'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'wide hide-on-sm-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'NHL Team'
                                        ),
                                        'NHL Team'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'wide hide-on-med-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Status'
                                        ),
                                        'Status'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-med-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Player ID'
                                        ),
                                        'ID'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-sm-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Games Played'
                                        ),
                                        'GP'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-med-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Goals'
                                        ),
                                        'G'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-med-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Assists'
                                        ),
                                        'A'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Points'
                                        ),
                                        'P'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Wins'
                                        ),
                                        'W'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Losses'
                                        ),
                                        'L'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Overtime Losses'
                                        ),
                                        'OTL'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Shutouts'
                                        ),
                                        'SHO'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-sm-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Goals Allowed Average'
                                        ),
                                        'GAA'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Goals Allowed'
                                        ),
                                        'GA'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Saves'
                                        ),
                                        'S'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-sm-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Save Percentage'
                                        ),
                                        'S%'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'narrow hide-on-lg-and-down' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Minutes Played'
                                        ),
                                        'MIP'
                                    )
                                ),
                                React.createElement('th', { className: 'wide player-functions' })
                            )
                        ),
                        React.createElement(
                            'tbody',
                            null,
                            this.props.players.map(function (element) {
                                if (element.position === "Goalie") return React.createElement(GoalieRow, Object.assign({ key: element.playerID }, element, { functions: _this2.props.functions }));
                            })
                        )
                    )
                )
            );
        }
    }]);

    return Roster;
}(React.Component);

export default Roster;