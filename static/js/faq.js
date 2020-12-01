var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import NavBar from './nav_bar.js';

var FAQ = function (_React$Component) {
    _inherits(FAQ, _React$Component);

    function FAQ() {
        _classCallCheck(this, FAQ);

        return _possibleConstructorReturn(this, (FAQ.__proto__ || Object.getPrototypeOf(FAQ)).apply(this, arguments));
    }

    _createClass(FAQ, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(NavBar, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'div',
                        { className: 'faq-container' },
                        React.createElement(
                            'div',
                            { className: 'faq-head' },
                            React.createElement(
                                'h1',
                                null,
                                'FAQ'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'faq-body' },
                            React.createElement(
                                'h3',
                                null,
                                'How does CK Fantasy Hockey work?'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'CK Fantasy Hockey is a fantasy hockey application that allows you to join leagues, create teams, add players to your team, create your own personalized roster, and manage your roster.'
                            ),
                            React.createElement(
                                'h3',
                                null,
                                'Where does the player data come from?'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'All data is pulled from the official NHL player statistics API. Once the season starts player data will updated daily. More information on this API can be found ',
                                React.createElement(
                                    'a',
                                    { href: 'https://github.com/dword4/nhlapi' },
                                    'here'
                                ),
                                '.'
                            ),
                            React.createElement(
                                'h3',
                                null,
                                'Can I join any league?'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Leagues marked as private cannot be joined by any user. They are invite only. You can join any public league with team slots available!'
                            ),
                            React.createElement(
                                'h3',
                                null,
                                'How do I view the leagues I am in and the teams I have created?'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'You can view all of the leagues you have joined and the teams you have created from your User Dashboard. From the dashboard you can click \'View\' on any of the leagues you are in or teams you have created to view their details and manage your roster.'
                            ),
                            React.createElement(
                                'h3',
                                null,
                                'Can I leave a league I have joined?'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'While you cannot leave a league once you have joined it, you can delete your team at any time if you no longer wish to participate.'
                            ),
                            React.createElement(
                                'h3',
                                null,
                                'How can I learn more about the amazing developers that created this incredible fantasy hockey app?'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'The Github for this project can be found ',
                                React.createElement(
                                    'a',
                                    { href: 'https://github.com/ck-fantasy-hockey/CKFantasyHockey' },
                                    'here'
                                )
                            ),
                            React.createElement(
                                'p',
                                null,
                                'George Kochera can be found on ',
                                React.createElement(
                                    'a',
                                    { href: 'https://github.com/gkochera' },
                                    'Github'
                                ),
                                '.'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'Wil Coiner can be found on ',
                                React.createElement(
                                    'a',
                                    { href: 'https://github.com/coinerwh' },
                                    'Github'
                                ),
                                ' and ',
                                React.createElement(
                                    'a',
                                    { href: 'https://www.linkedin.com/in/william-coiner-a78b8398/' },
                                    'LinkedIn'
                                ),
                                '.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return FAQ;
}(React.Component);

ReactDOM.render(React.createElement(FAQ, null), document.getElementById('root'));