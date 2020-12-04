var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertGoalie = function (_React$Component) {
    _inherits(InsertGoalie, _React$Component);

    function InsertGoalie(props) {
        _classCallCheck(this, InsertGoalie);

        var _this = _possibleConstructorReturn(this, (InsertGoalie.__proto__ || Object.getPrototypeOf(InsertGoalie)).call(this, props));

        _this.handleSubmitGoalie = function (event) {
            event.preventDefault();
            var playerdata = _this.state;
            console.log(playerdata);
            var url = "/insertgoalie";
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(playerdata)
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                if (data['response'] === true) {
                    window.location.href = "/playeradmin?token=" + localStorage.getItem('usertoken');
                } else {
                    console.log("error");
                }
            });
        };

        _this.handleSignup = function (event) {
            event.preventDefault();
            window.location.href = "/";
        };

        _this.handleName = function (event) {
            _this.setState({ name: event.target.value });
        };

        _this.handleTeam = function (event) {
            _this.setState({ team: event.target.value });
        };

        _this.handleStatus = function (event) {
            _this.setState({ status: event.target.value });
        };

        _this.handleGP = function (event) {
            _this.setState({ gamesPlayed: event.target.value });
        };

        _this.handleGoals = function (event) {
            _this.setState({ goals: event.target.value });
        };

        _this.handleAssists = function (event) {
            _this.setState({ assists: event.target.value });
        };

        _this.handleShutouts = function (event) {
            _this.setState({ shutOuts: event.target.value });
        };

        _this.handleGAA = function (event) {
            _this.setState({ goalsAllowedAverage: event.target.value });
        };

        _this.handleSP = function (event) {
            _this.setState({ savePercentage: event.target.value });
        };

        _this.state = {
            name: "",
            team: "",
            status: "",
            position: "Goalie",
            gamesPlayed: "",
            goals: "",
            assists: "",
            shutOuts: "",
            goalsAllowedAverage: "",
            savePercentage: ""
        };
        return _this;
    }

    _createClass(InsertGoalie, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_text", onChange: this.handleName, type: "text", id: "name", name: "name" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_text", onChange: this.handleTeam, type: "text", id: "team", name: "team" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_text", onChange: this.handleStatus, type: "number", min: "1", max: "4", id: "status", name: "status" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleGP, type: "number", id: "gamesplayed", name: "gamesplayed" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleGoals, type: "number", id: "goals", name: "goals" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleAssists, type: "number", id: "assists", name: "assists" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleShutouts, type: "number", id: "shutouts", name: "shutouts" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleGAA, type: "number", id: "goalsagainstaverage", name: "goalsagainstaverage" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleSP, type: "number", id: "savepercentage", name: "savepercentage" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "button",
                        { className: "player_button", onClick: this.handleSubmitGoalie },
                        "Save"
                    )
                )
            );
        }
    }]);

    return InsertGoalie;
}(React.Component);

export default InsertGoalie;