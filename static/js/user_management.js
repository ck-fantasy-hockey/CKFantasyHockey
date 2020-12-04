var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import NavBar from './nav_bar.js';
import UserRoster from './user_management/user_roster.js';

var UserManagement = function (_React$Component) {
    _inherits(UserManagement, _React$Component);

    function UserManagement() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserManagement);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserManagement.__proto__ || Object.getPrototypeOf(UserManagement)).call.apply(_ref, [this].concat(args))), _this), _this.deleteUser = function (userID) {
            var url = "/delete-user";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userID)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if (data['response'] === true) {
                    window.location.href = "/user-management?token=" + localStorage.getItem('usertoken');
                } else {
                    console.log('error');
                }
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // Takes a userID and sends it via POST to be removed from the DB


    _createClass(UserManagement, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'background-filter' },
                React.createElement(NavBar, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(UserRoster, { users: dataFromServer, deleteUser: this.deleteUser })
                )
            );
        }
    }]);

    return UserManagement;
}(React.Component);

ReactDOM.render(React.createElement(UserManagement, null), document.getElementById('root'));