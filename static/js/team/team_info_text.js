var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamInformationText = function (_React$Component) {
    _inherits(TeamInformationText, _React$Component);

    function TeamInformationText(props) {
        _classCallCheck(this, TeamInformationText);

        var _this = _possibleConstructorReturn(this, (TeamInformationText.__proto__ || Object.getPrototypeOf(TeamInformationText)).call(this, props));

        _this.convertDateToPage = function () {
            var oldDate = _this.props.leagueInfo.seasonEnds;
            var newDate = oldDate.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
            return newDate;
        };

        _this.forceDatePickerEvent = function () {
            var pickerValue = document.getElementById('datepicker').value;
            _this.props.functions.updateSeasonEnds(pickerValue);
        };

        _this.state = {
            seasonEndsAlternate: _this.convertDateToPage()
        };
        return _this;
    }

    _createClass(TeamInformationText, [{
        key: 'render',
        value: function render() {
            var result = void 0;
            if (this.props.editingAttributes) {
                result = React.createElement(
                    'div',
                    { className: 'team-info-text' },
                    React.createElement(
                        'form',
                        null,
                        React.createElement(
                            'h1',
                            null,
                            ' Team Name:',
                            React.createElement('input', { type: 'text', onChange: this.props.functions.updateTeamName, defaultValue: this.props.teamName })
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Season Ends:',
                            React.createElement('input', { type: 'date', id: 'datepicker', onChange: this.forceDatePickerEvent, defaultValue: this.state.seasonEndsAlternate })
                        ),
                        React.createElement(
                            'p',
                            null,
                            'League:',
                            React.createElement('input', { type: 'text', value: this.props.leagueInfo.leagueName, disabled: true })
                        ),
                        React.createElement(
                            'p',
                            null,
                            'League ID:',
                            React.createElement('input', { type: 'text', value: this.props.leagueInfo.leagueID, disabled: true })
                        )
                    )
                );
            } else {
                result = React.createElement(
                    'div',
                    { className: 'team-info-text' },
                    React.createElement(
                        'h1',
                        null,
                        this.props.teamName
                    ),
                    React.createElement(
                        'p',
                        null,
                        'Season Ends: ',
                        this.props.leagueInfo.seasonEnds
                    ),
                    React.createElement(
                        'p',
                        null,
                        'League: ',
                        this.props.leagueInfo.leagueName
                    ),
                    React.createElement(
                        'p',
                        null,
                        'League ID: ',
                        this.props.leagueInfo.leagueID
                    )
                );
            }

            return result;
        }
    }]);

    return TeamInformationText;
}(React.Component);

export default TeamInformationText;