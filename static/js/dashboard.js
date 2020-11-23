var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import UserInfo from './dashboard_items/user_info.js';
import UserLeagues from './dashboard_items/user_leagues.js';
import UserTeams from './dashboard_items/user_teams.js';
import NavBar from './nav_bar.js';

// window.history.replaceState({}, document.title, "/dashboard");

var Dashboard = function (_React$Component) {
    _inherits(Dashboard, _React$Component);

    function Dashboard() {
        _classCallCheck(this, Dashboard);

        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));

        _this.state = dataFromServer;
        return _this;
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
                    React.createElement('div', { className: 'split-widgets' }),
                    React.createElement(UserInfo, { data: this.state }),
                    React.createElement('div', { className: 'split-widgets' }),
                    React.createElement(UserLeagues, { data: this.state }),
                    React.createElement('div', { className: 'split-widgets' }),
                    React.createElement(UserTeams, { data: this.state })
                )
            );
        }
    }]);

    return Dashboard;
}(React.Component);

ReactDOM.render(React.createElement(Dashboard, null), document.getElementById('root'));