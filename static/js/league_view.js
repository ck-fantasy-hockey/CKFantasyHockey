var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Teams from './league/teams.js';
import LeagueInformation from './league/league_information.js';
import NavBar from './nav_bar.js';
import data from '../json/data.js';

var LeagueView = function (_React$Component) {
    _inherits(LeagueView, _React$Component);

    function LeagueView() {
        _classCallCheck(this, LeagueView);

        return _possibleConstructorReturn(this, (LeagueView.__proto__ || Object.getPrototypeOf(LeagueView)).apply(this, arguments));
    }

    _createClass(LeagueView, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(NavBar, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(LeagueInformation, { data: data }),
                    React.createElement(Teams, { data: data })
                )
            );
        }
    }]);

    return LeagueView;
}(React.Component);

ReactDOM.render(React.createElement(LeagueView, null), document.getElementById('root'));