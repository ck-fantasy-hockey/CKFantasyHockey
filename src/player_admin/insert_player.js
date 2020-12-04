export default class InsertPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
            blocks: "",
        };
    }

    handleSubmitPlayer = (event) => {
        event.preventDefault();
        const playerdata = this.state
        console.log(playerdata)
        const url = "/insertplayer"
        fetch(url, {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(playerdata)
        })
        .then((response) => response.json())
        .then(data => {
            if (data['response'] === true) {
                window.location.href = "/playeradmin?token="+localStorage.getItem('usertoken');
            } else {
                // const element = <p className="incorrect-text">Username or password is incorrect</p>;
                // ReactDOM.render(element, document.getElementsByClassName('incorrect-creds')[0]);
                console.log("error")
            }
        })
    }

    handleSignup = (event) => {
        event.preventDefault();
        window.location.href = "/";
    }

    handleName = (event) => {
        this.setState({ name: event.target.value });
    }
    handleTeam = (event) => {
        this.setState({ team: event.target.value });
    }
    handlePosition = (event) => {
        this.setState({ position: event.target.value });
    }
    handleStatus = (event) => {
        this.setState({ status: event.target.value });
    }
    handleGP = (event) => {
        this.setState({ gamesPlayed: event.target.value });
    }
    handleGoals = (event) => {
        this.setState({ goals: event.target.value });
    }
    handleAssists = (event) => {
        this.setState({ assists: event.target.value });
    }
    handlePoints = (event) => {
        this.setState({ points: event.target.value });
    }
    handleGWG = (event) => {
        this.setState({ gameWinningGoals: event.target.value });
    }
    handlePM = (event) => {
        this.setState({ penaltyMinutes: event.target.value });
    }
    handleMP = (event) => {
        this.setState({ minutesPlayed: event.target.value });
    }
    handleBlocks = (event) => {
        this.setState({ blocks: event.target.value });
    }


    render() {
        return <tr>
            <td><input className="player_input player_text" onChange={this.handleName} type="text" id="name" name="name" /></td>
            <td><input className="player_input player_text" onChange={this.handleTeam} type="text" id="team" name="team" /></td>
            <td><input className="player_input player_text" onChange={this.handleStatus} type="text" id="status" name="status" /></td>
            <td><input className="player_input player_text" onChange={this.handlePosition} type="text" id="position" name="position" /></td>
            <td><input className="player_input player_num" onChange={this.handleGP} type="text" id="gamesplayed" name="gamesplayed" /></td>
            <td><input className="player_input player_num" onChange={this.handleGoals} type="text" id="goals" name="goals" /></td>
            <td><input className="player_input player_num" onChange={this.handleAssists} type="text" id="assists" name="assists" /></td>
            <td><input className="player_input player_num" onChange={this.handlePoints} type="text" id="points" name="points" /></td>
            <td><input className="player_input player_num" onChange={this.handleGWG} type="text" id="gamewinninggoals" name="gamewinninggoals" /></td>
            <td><input className="player_input player_num" onChange={this.handlePM} type="text" id="penaltyminutes" name="penaltyminutes" /></td>
            <td><input className="player_input player_num" onChange={this.handleMP} type="text" id="minutesplayed" name="minutesplayed" /></td>
            <td><input className="player_input player_num" onChange={this.handleBlocks} type="text" id="blocks" name="blocks" /></td>
            <td><button className="player_button" onClick={this.handleSubmitPlayer}>Save</button></td>
        </tr>
    }
}

