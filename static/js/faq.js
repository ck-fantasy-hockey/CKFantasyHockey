var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import NavBar from './nav_bar.js';

var Dashboard = function (_React$Component) {
    _inherits(Dashboard, _React$Component);

    function Dashboard() {
        _classCallCheck(this, Dashboard);

        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
    }

    _createClass(Dashboard, [{
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
                            'Where does your player data come from?'
                        ),
                        React.createElement('p', null)
                    )
                )
            );
        }
    }]);

    return Dashboard;
}(React.Component);

ReactDOM.render(React.createElement(FAQ, null), document.getElementById('root'));