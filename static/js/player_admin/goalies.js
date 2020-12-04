var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import GoalieRow from './goalie_row.js';

var Goalies = function (_React$Component) {
    _inherits(Goalies, _React$Component);

    function Goalies(props) {
        _classCallCheck(this, Goalies);

        var _this = _possibleConstructorReturn(this, (Goalies.__proto__ || Object.getPrototypeOf(Goalies)).call(this, props));

        _this.sortByRank = function () {
            _this.state.teams.sort(function (a, b) {
                return a.rank < b.rank ? -1 : 1;
            });
        };

        return _this;
    }

    _createClass(Goalies, [{
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
                        'Goalies'
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
                                'Team'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Status'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Position'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Games Played'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Goals'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Assists'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Shutouts'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'GAA'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'S%'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.props.data.filter(function (player) {
                            return player.position == 'Goalie';
                        }).map(function (element) {
                            return React.createElement(GoalieRow, Object.assign({ key: element.playerID }, element));
                        })
                    )
                )
            );
        }
    }]);

    return Goalies;
}(React.Component);

export default Goalies;