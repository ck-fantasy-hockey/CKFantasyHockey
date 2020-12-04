var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertPlayer = function (_React$Component) {
    _inherits(InsertPlayer, _React$Component);

    function InsertPlayer(props) {
        _classCallCheck(this, InsertPlayer);

        var _this = _possibleConstructorReturn(this, (InsertPlayer.__proto__ || Object.getPrototypeOf(InsertPlayer)).call(this, props));

        _this.handleSubmitPlayer = function (event) {
            event.preventDefault();
            var playerdata = _this.state;
            console.log(playerdata);
            var url = "/insertplayer";
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
                    // const element = <p className="incorrect-text">Username or password is incorrect</p>;
                    // ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
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

        _this.handlePosition = function (event) {
            _this.setState({ position: event.target.value });
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

        _this.handlePoints = function (event) {
            _this.setState({ points: event.target.value });
        };

        _this.handleGWG = function (event) {
            _this.setState({ gameWinningGoals: event.target.value });
        };

        _this.handlePM = function (event) {
            _this.setState({ penaltyMinutes: event.target.value });
        };

        _this.handleMP = function (event) {
            _this.setState({ minutesPlayed: event.target.value });
        };

        _this.handleBlocks = function (event) {
            _this.setState({ blocks: event.target.value });
        };

        _this.state = {
            name: "",
            team: "",
            status: "",
            position: "",
            gamesPlayed: "",
            goals: "",
            assists: "",
            points: "",
            gameWinningGoals: "",
            penaltyMinutes: "",
            minutesPlayed: "",
            blocks: ""
        };
        return _this;
    }

    _createClass(InsertPlayer, [{
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
                    React.createElement("input", { className: "player_input player_text", onChange: this.handlePosition, type: "text", id: "position", name: "position" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleGP, type: "text", id: "gamesplayed", name: "gamesplayed" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleGoals, type: "text", id: "goals", name: "goals" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleAssists, type: "text", id: "assists", name: "assists" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handlePoints, type: "text", id: "points", name: "points" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleGWG, type: "text", id: "gamewinninggoals", name: "gamewinninggoals" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handlePM, type: "text", id: "penaltyminutes", name: "penaltyminutes" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleMP, type: "text", id: "minutesplayed", name: "minutesplayed" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement("input", { className: "player_input player_num", onChange: this.handleBlocks, type: "text", id: "blocks", name: "blocks" })
                ),
                React.createElement(
                    "td",
                    null,
                    React.createElement(
                        "button",
                        { className: "player_button", onClick: this.handleSubmitPlayer },
                        "Save"
                    )
                )
            );
        }
    }]);

    return InsertPlayer;
}(React.Component);

export default InsertPlayer;