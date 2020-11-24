var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import NavBar from './nav_bar.js';
import Signup from './signup.js';

var LandingPage = function (_React$Component) {
    _inherits(LandingPage, _React$Component);

    function LandingPage() {
        _classCallCheck(this, LandingPage);

        return _possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
    }

    _createClass(LandingPage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(
                    'div',
                    { className: 'welcome-content' },
                    React.createElement(
                        'div',
                        { className: 'front-page-title' },
                        React.createElement(
                            'div',
                            { className: 'title-initials' },
                            React.createElement(
                                'span',
                                null,
                                'CK'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'title-text' },
                            React.createElement(
                                'span',
                                null,
                                'Fantasy'
                            ),
                            React.createElement(
                                'span',
                                null,
                                'Hockey'
                            )
                        )
                    ),
                    React.createElement(Signup, null),
                    React.createElement(
                        'div',
                        { className: 'footer' },
                        React.createElement(
                            'div',
                            { className: 'footer-left' },
                            React.createElement(
                                'a',
                                { href: 'https://github.com/ck-fantasy-hockey/CKFantasyHockey' },
                                React.createElement('i', { 'class': 'fab fa-github' }),
                                ' GitHub'
                            ),
                            React.createElement(
                                'div',
                                { className: 'divider' },
                                ' '
                            ),
                            React.createElement(
                                'p',
                                { className: 'paragraph-header' },
                                'Developed with Pride by:'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'William Coiner'
                            ),
                            React.createElement(
                                'p',
                                null,
                                'George Kochera'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'footer-center' },
                            React.createElement(
                                'div',
                                { className: 'tagline' },
                                React.createElement(
                                    'h1',
                                    null,
                                    'Sign up and join'
                                ),
                                React.createElement(
                                    'h4',
                                    null,
                                    'the most exciting platform in fantasy hockey!'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'footer-right' },
                            React.createElement(
                                'p',
                                null,
                                'Powered by'
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement('i', { className: 'fab fa-react' }),
                                React.createElement('i', { className: 'fas fa-flask' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LandingPage;
}(React.Component);

ReactDOM.render(React.createElement(LandingPage, null), document.getElementById('root'));