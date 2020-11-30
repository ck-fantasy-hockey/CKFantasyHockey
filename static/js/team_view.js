var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Roster from './team/roster.js';
import TeamInformation from './team/team_information.js';
import NavBar from './nav_bar.js';

var TeamView = function (_React$Component) {
    _inherits(TeamView, _React$Component);

    function TeamView(props) {
        _classCallCheck(this, TeamView);

        var _this = _possibleConstructorReturn(this, (TeamView.__proto__ || Object.getPrototypeOf(TeamView)).call(this, props));

        _this.updateTeamName = function (event) {
            _this.setState(function (state) {
                var newState = Object.assign({}, state);
                newState.modifiedTeamInfo.teamName = event.target.value;
                return { newState: newState };
            });
        };

        _this.updateSeasonEnds = function (newValue) {
            _this.setState(function (state) {
                var newState = Object.assign({}, state);
                newState.modifiedTeamInfo.seasonEnds = newValue;
                return { newState: newState };
            });
        };

        _this.commitUpdateTeamAttributes = function () {
            var queryString = window.location.search;
            var urlParams = new URLSearchParams(queryString);
            var teamID = parseInt(urlParams.get('teamID'));
            var url = '/update-team-attributes';

            var teamAttributesToUpdate = Object.assign({}, _this.state.modifiedTeamInfo);
            teamAttributesToUpdate.teamID = teamID;

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(teamAttributesToUpdate)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if (data['response'] === true) {
                    var token = localStorage.getItem('usertoken');
                    window.location.href = '/team-view?token=' + token + '&teamID=' + teamID;
                }
            });
        };

        _this.dropPlayer = function (playerID) {
            var queryString = window.location.search;
            var urlParams = new URLSearchParams(queryString);
            var teamID = parseInt(urlParams.get('teamID'));
            var url = '/drop-player';

            var playerToDrop = {
                playerID: playerID,
                teamID: teamID,
                leagueID: _this.state.leagueInfo.leagueID
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(playerToDrop)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if (data['response'] === true) {
                    var token = localStorage.getItem('usertoken');
                    window.location.href = '/team-view?token=' + token + '&teamID=' + teamID;
                }
            });
        };

        _this.state = dataFromServer;
        _this.state.modifiedTeamInfo = {
            seasonEnds: null,
            teamName: null
        };
        _this.state.functions = {
            dropPlayer: _this.dropPlayer,
            updateTeamName: _this.updateTeamName,
            updateSeasonEnds: _this.updateSeasonEnds,
            commitUpdateTeamAttributes: _this.commitUpdateTeamAttributes
        };
        return _this;
    }

    _createClass(TeamView, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(NavBar, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(TeamInformation, this.state),
                    React.createElement(Roster, this.state)
                )
            );
        }
    }]);

    return TeamView;
}(React.Component);

ReactDOM.render(React.createElement(TeamView, null), document.getElementById('root'));