var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import UserRow from './user_row.js';

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
                        'User Management'
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
                                            'User ID'
                                        ),
                                        'User ID'
                                    )
                                ),
                                React.createElement(
                                    'th',
                                    { className: 'wide' },
                                    React.createElement(
                                        'div',
                                        { className: 'tooltip' },
                                        React.createElement(
                                            'span',
                                            { className: 'tooltiptext' },
                                            'Email'
                                        ),
                                        'Email'
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
                                            'Password'
                                        ),
                                        'Password'
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
                                            'Session ID'
                                        ),
                                        'Session ID'
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
                                            'Session Expires'
                                        ),
                                        'Session Expires'
                                    )
                                ),
                                React.createElement('th', { className: 'wide player-functions' })
                            )
                        ),
                        React.createElement(
                            'tbody',
                            null,
                            this.props.users.map(function (element) {
                                return React.createElement(UserRow, Object.assign({ key: element.userID }, element, { deleteUser: _this2.props.deleteUser }));
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