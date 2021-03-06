var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Players from './player_admin/players.js';
import Goalies from './player_admin/goalies.js';
import PlayerInformation from './player_admin/player_information.js';
import GoalieInformation from './player_admin/goalie_information.js';
import NavBar from './nav_bar.js';

var PlayerView = function (_React$Component) {
    _inherits(PlayerView, _React$Component);

    function PlayerView() {
        _classCallCheck(this, PlayerView);

        var _this = _possibleConstructorReturn(this, (PlayerView.__proto__ || Object.getPrototypeOf(PlayerView)).call(this));

        _this.state = dataFromServer;
        console.log(_this.state);
        return _this;
    }

    _createClass(PlayerView, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(NavBar, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(PlayerInformation, null),
                    React.createElement(Players, { data: this.state.players }),
                    React.createElement(GoalieInformation, null),
                    React.createElement(Goalies, { data: this.state.players })
                )
            );
        }
    }]);

    return PlayerView;
}(React.Component);

ReactDOM.render(React.createElement(PlayerView, null), document.getElementById('root'));