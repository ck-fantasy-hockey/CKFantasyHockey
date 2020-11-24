var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserTeamRow = function (_React$Component) {
    _inherits(UserTeamRow, _React$Component);

    function UserTeamRow() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserTeamRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserTeamRow.__proto__ || Object.getPrototypeOf(UserTeamRow)).call.apply(_ref, [this].concat(args))), _this), _this.handleTeamView = function (event) {
            event.preventDefault();
            var pageData = {
                teamID: _this.props[0]
            };
            var url = "/team-view?token=" + localStorage.getItem('usertoken');
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pageData)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data);
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserTeamRow, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'tr',
                null,
                React.createElement(
                    'td',
                    null,
                    React.createElement(
                        'button',
                        { onClick: this.handleTeamView },
                        'View'
                    )
                ),
                React.createElement(
                    'td',
                    null,
                    this.props[0]
                ),
                React.createElement(
                    'td',
                    null,
                    this.props[1]
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.rank
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.win
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.loss
                ),
                React.createElement(
                    'td',
                    null,
                    this.props.createdOn
                ),
                React.createElement(
                    'td',
                    null,
                    this.props[2]
                )
            );
        }
    }]);

    return UserTeamRow;
}(React.Component);

export default UserTeamRow;