var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import NavBar from './nav_bar.js';
import LeagueList from './join_league/league_list.js';

window.history.replaceState({}, document.title, "/join-league");

var JoinLeague = function (_React$Component) {
    _inherits(JoinLeague, _React$Component);

    function JoinLeague() {
        _classCallCheck(this, JoinLeague);

        return _possibleConstructorReturn(this, (JoinLeague.__proto__ || Object.getPrototypeOf(JoinLeague)).apply(this, arguments));
    }

    _createClass(JoinLeague, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(NavBar, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(LeagueList, null)
                )
            );
        }
    }]);

    return JoinLeague;
}(React.Component);

ReactDOM.render(React.createElement(JoinLeague, null), document.getElementById('root'));