var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import LeagueRow from './league_row.js';

var LeagueList = function (_React$Component) {
    _inherits(LeagueList, _React$Component);

    function LeagueList(props) {
        _classCallCheck(this, LeagueList);

        var _this = _possibleConstructorReturn(this, (LeagueList.__proto__ || Object.getPrototypeOf(LeagueList)).call(this, props));

        _this.updateLeagueName = function (e) {
            _this.setState({ modalInformation: {
                    leagueName: e.target.value,
                    visibility: _this.state.modalInformation.visibility
                } });
        };

        _this.updateLeagueVisibility = function (e) {
            _this.setState({ modalInformation: {
                    leagueName: _this.state.modalInformation.leagueName,
                    visibility: e.target.value
                } });
        };

        _this.displayModal = function () {
            _this.setState({ modalVisible: !_this.state.modalVisible });
            if (_this.state.modalStyle.display === 'none') {
                _this.setState({ modalStyle: { display: 'block' } });
            } else {
                _this.setState({ modalStyle: { display: 'none' } });
            }
        };

        _this.handleNewLeague = function (e) {
            e.preventDefault();
            var leagueInfo = _this.state.modalInformation;
            var url = '/add-new-league';

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(leagueInfo)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if (data['response'] === true) {
                    window.location.href = '/join-league';
                }
            });
        };

        _this.state = {
            leagues: dataFromServer.leagues,
            modalVisible: false,
            modalStyle: {
                display: 'none'
            },
            modalInformation: {
                leagueName: '',
                visibility: 'private'
            }
        };
        return _this;
    }

    _createClass(LeagueList, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'roster' },
                React.createElement(
                    'div',
                    { className: 'roster-title' },
                    React.createElement(
                        'h2',
                        null,
                        'Leagues'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'roster-functions' },
                    React.createElement(
                        'button',
                        { id: 'new-league-button', onClick: this.displayModal, className: 'btn' },
                        'Create New League'
                    )
                ),
                React.createElement(
                    'div',
                    { id: 'new-league-modal', style: this.state.modalStyle, className: 'modal' },
                    React.createElement(
                        'div',
                        { className: 'modal-content' },
                        React.createElement(
                            'form',
                            null,
                            React.createElement(
                                'label',
                                null,
                                'Team Name'
                            ),
                            React.createElement('input', { type: 'text', onChange: this.updateLeagueName }),
                            React.createElement(
                                'label',
                                null,
                                'Private'
                            ),
                            React.createElement('input', { type: 'radio', defaultChecked: true, onChange: this.updateLeagueVisibility, name: 'visibility', value: 'private' }),
                            React.createElement(
                                'label',
                                null,
                                'Public'
                            ),
                            React.createElement('input', { type: 'radio', onChange: this.updateLeagueVisibility, name: 'visibility', value: 'public' })
                        ),
                        React.createElement(
                            'button',
                            { onClick: this.displayModal },
                            'Cancel'
                        ),
                        React.createElement(
                            'button',
                            { onClick: this.handleNewLeague },
                            'Submit'
                        )
                    )
                ),
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
                                null,
                                'ID'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Name'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Teams'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Visibility'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Season Ends'
                            ),
                            React.createElement(
                                'th',
                                null,
                                'Functions'
                            )
                        )
                    ),
                    React.createElement(
                        'tbody',
                        null,
                        this.state.leagues.map(function (element) {
                            return React.createElement(LeagueRow, Object.assign({ key: element.leagueID }, element));
                        })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'roster-instructions' },
                    React.createElement(
                        'p',
                        null,
                        'View the all leagues above and click \'JOIN\' on a league you wish to create a team in.'
                    )
                )
            );
        }
    }]);

    return LeagueList;
}(React.Component);

export default LeagueList;