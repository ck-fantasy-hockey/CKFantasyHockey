var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamInformation = function (_React$Component) {
    _inherits(TeamInformation, _React$Component);

    function TeamInformation() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TeamInformation);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeamInformation.__proto__ || Object.getPrototypeOf(TeamInformation)).call.apply(_ref, [this].concat(args))), _this), _this.deleteTeam = function (event) {
            event.preventDefault();
            confirmAlert({
                title: 'Confirm to submit',
                message: 'Are you sure to do delete this team?',
                buttons: [{
                    label: 'Yes',
                    onClick: function onClick() {
                        return alert('Click Yes');
                    }
                }, {
                    label: 'No',
                    onClick: function onClick() {
                        return alert('Click No');
                    }
                }]
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TeamInformation, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                { className: 'team-info' },
                React.createElement(
                    'div',
                    { className: 'team-info-primary' },
                    React.createElement(
                        'div',
                        { className: 'team-info-header' },
                        React.createElement('img', { className: 'team-info-image', src: '/static/img/hockey1_unsplash.jpg' })
                    ),
                    React.createElement(
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
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'team-info-subheader' },
                    React.createElement(
                        'button',
                        { className: 'btn' },
                        'Edit Team Attributes'
                    ),
                    React.createElement(
                        'button',
                        { className: 'btn', onClick: function onClick() {
                                if (window.confirm('Are you sure you wish to delete this item?')) _this2.onCancel(item);
                            } },
                        'Delete Team'
                    )
                )
            );
        }
    }]);

    return TeamInformation;
}(React.Component);

export default TeamInformation;