var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import data from '../../json/data.js';
import PlayerSelectRow from './player_select_row.js';

var PlayerSelect = function (_React$Component) {
    _inherits(PlayerSelect, _React$Component);

    function PlayerSelect(props) {
        _classCallCheck(this, PlayerSelect);

        var _this = _possibleConstructorReturn(this, (PlayerSelect.__proto__ || Object.getPrototypeOf(PlayerSelect)).call(this, props));

        _this.state = {
            players: data.players,
            players_selected: []
        };
        return _this;
    }

    _createClass(PlayerSelect, [{
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
                        'Player Select'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'player-select' },
                    React.createElement(
                        'div',
                        { className: 'roster player-available' },
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
                                        'Player ID'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Name'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Position'
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
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Points'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Select'
                                    )
                                )
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                this.state.players.map(function (element) {
                                    return React.createElement(PlayerSelectRow, { key: element.playerID, player: element });
                                })
                            )
                        )
                    ),
                    React.createElement('div', { className: 'spacer' }),
                    React.createElement(
                        'div',
                        { className: 'roster player-selected' },
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
                                        'Player ID'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Name'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Position'
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
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Points'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Selected'
                                    )
                                )
                            ),
                            React.createElement('tbody', null)
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'roster-instructions' },
                    React.createElement(
                        'p',
                        null,
                        'Pick a player on the left, and it gets added to the table on the right to compose your team.'
                    )
                )
            );
        }
    }]);

    return PlayerSelect;
}(React.Component);

export default PlayerSelect;