var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamAttributesForm = function (_React$Component) {
    _inherits(TeamAttributesForm, _React$Component);

    function TeamAttributesForm() {
        _classCallCheck(this, TeamAttributesForm);

        return _possibleConstructorReturn(this, (TeamAttributesForm.__proto__ || Object.getPrototypeOf(TeamAttributesForm)).apply(this, arguments));
    }

    _createClass(TeamAttributesForm, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { action: '/', method: 'GET' },
                React.createElement(
                    'label',
                    null,
                    'Team Name'
                ),
                React.createElement('input', { type: 'text', name: 'teamName' }),
                React.createElement(
                    'label',
                    null,
                    'League ID'
                ),
                React.createElement('input', { type: 'text', name: 'leagueID', defaultValue: dataFromServer.leagueID, disabled: true }),
                React.createElement('input', { type: 'submit', value: 'Make Team' })
            );
        }
    }]);

    return TeamAttributesForm;
}(React.Component);

export default TeamAttributesForm;