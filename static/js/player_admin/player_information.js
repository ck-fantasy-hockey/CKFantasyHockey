var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import InsertPlayer from './insert_player.js';

var PlayerInformation = function (_React$Component) {
    _inherits(PlayerInformation, _React$Component);

    function PlayerInformation(props) {
        _classCallCheck(this, PlayerInformation);

        var _this = _possibleConstructorReturn(this, (PlayerInformation.__proto__ || Object.getPrototypeOf(PlayerInformation)).call(this, props));

        _this.handleEditAccount = function (event) {
            event.preventDefault();
            window.location.href = "/dashboard?token=" + localStorage.getItem('usertoken');
        };

        return _this;
    }

    _createClass(PlayerInformation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'team-info' },
                React.createElement(
                    'div',
                    { className: 'team-info-primary' },
                    React.createElement(
                        'div',
                        { className: 'team-info-header' },
                        React.createElement('img', { className: 'team-info-image', src: '/static/img/hockey-team.jpg' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'team-info-text' },
                        React.createElement(
                            'h1',
                            null,
                            'Add Player'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'team-info-subheader' },
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
                                    'GP'
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
                                    'Points'
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    'GWG'
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    'P/M'
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    'Min P'
                                ),
                                React.createElement(
                                    'th',
                                    null,
                                    'Blocks'
                                )
                            )
                        ),
                        React.createElement(
                            'tbody',
                            null,
                            React.createElement(InsertPlayer, null)
                        )
                    )
                )
            );
        }
    }]);

    return PlayerInformation;
}(React.Component);

export default PlayerInformation;