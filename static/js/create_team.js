var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import NavBar from './nav_bar.js';
import TeamAttributes from './create_team/team_attributes.js';
import PlayerSelect from './create_team/player_select.js';
import data from './../json/data.js';

var CreateTeam = function (_React$Component) {
    _inherits(CreateTeam, _React$Component);

    function CreateTeam(props) {
        _classCallCheck(this, CreateTeam);

        var _this = _possibleConstructorReturn(this, (CreateTeam.__proto__ || Object.getPrototypeOf(CreateTeam)).call(this, props));

        _this.selectPlayer = function (player) {

            _this.setState(function (state) {

                var data = Object.assign({}, state.data);

                var playersNotSelected = data.playersNotSelected.filter(function (p) {
                    return p.playerID !== player.playerID;
                });
                data.playersNotSelected = playersNotSelected.sort(function (a, b) {
                    return a.playerID > b.playerID ? 1 : -1;
                });

                var playersSelected = data.playersSelected.concat(player);
                data.playersSelected = playersSelected.sort(function (a, b) {
                    return a.playerID > b.playerID ? 1 : -1;
                });

                return { data: data };
            });
        };

        _this.deselectPlayer = function (player) {

            _this.setState(function (state) {

                var data = Object.assign({}, state.data);

                var playersNotSelected = data.playersNotSelected.concat(player);
                data.playersNotSelected = playersNotSelected.sort(function (a, b) {
                    return a.playerID > b.playerID ? 1 : -1;
                });

                var playersSelected = data.playersSelected.filter(function (p) {
                    return p.playerID !== player.playerID;
                });
                data.playersSelected = playersSelected.sort(function (a, b) {
                    return a.playerID > b.playerID ? 1 : -1;
                });

                return { data: data };
            });
        };

        _this.updatePlayers = function (e) {
            _this.setState(function (prevState) {
                var players = Object.assign({}, prevState.data.players);
                players = e.taget.value;
                return { players: players };
            });
        };

        _this.updateTeamName = function (e) {
            _this.setState(function (prevState) {
                var data = Object.assign({}, prevState.data);
                data.teamName = e.target.value;
                return { data: data };
            });
        };

        _this.handleNewTeam = function (e) {
            e.preventDefault();
            var teamInfo = _this.state.data;
            var url = '/add-new-team';

            if (teamInfo.teamName === '') {
                _this.setState(function (prevState) {
                    var error = Object.assign({}, prevState.error);
                    console.log(error);
                    error.message = 'You must enter a team name.';
                    return { error: error };
                });
            } else {

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(teamInfo)
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    if (data['response'] === true) {
                        window.location.href = '/dashboard?token=' + localStorage.getItem('usertoken');
                    } else {
                        console.log("Team name taken");
                    }
                });
            }
        };

        _this.state = {
            functions: {
                updateTeamName: _this.updateTeamName,
                updatePlayers: _this.updatePlayers,
                selectPlayer: _this.selectPlayer,
                deselectPlayer: _this.deselectPlayer,
                handleNewTeam: _this.handleNewTeam
            },
            data: {
                teamName: '',
                leagueID: dataFromServer.leagueID,
                players: dataFromServer.players,
                playersSelected: [],
                playersNotSelected: dataFromServer.players,
                token: localStorage.getItem('usertoken')
            },
            error: {
                style: {
                    display: 'hidden'
                },
                message: ""
            }
        };
        return _this;
    }

    _createClass(CreateTeam, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(NavBar, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(TeamAttributes, this.state),
                    React.createElement(PlayerSelect, this.state)
                )
            );
        }
    }]);

    return CreateTeam;
}(React.Component);

ReactDOM.render(React.createElement(CreateTeam, null), document.getElementById('root'));