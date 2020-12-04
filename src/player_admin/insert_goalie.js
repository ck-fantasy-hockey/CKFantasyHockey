export default class InsertGoalie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
    }

    handleSubmitGoalie = (event) => {
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
    handleShutouts = (event) => {
        this.setState({ shutOuts: event.target.value });
    }
    handleGAA = (event) => {
        this.setState({ goalsAllowedAverage: event.target.value });
    }
    handleSP = (event) => {
        this.setState({ savePercentage: event.target.value });
    }

    render() {
        return <tr>
            <td><input className="player_input player_text" onChange={this.handleName} type="text" id="name" name="name" /></td>
            <td><input className="player_input player_text" onChange={this.handleTeam} type="text" id="team" name="team" /></td>
            <td><input className="player_input player_text" onChange={this.handleStatus} type="text" id="status" name="status" /></td>
            <td><input className="player_input player_num" onChange={this.handleGP} type="text" id="gamesplayed" name="gamesplayed" /></td>
            <td><input className="player_input player_num" onChange={this.handleGoals} type="text" id="goals" name="goals" /></td>
            <td><input className="player_input player_num" onChange={this.handleAssists} type="text" id="assists" name="assists" /></td>
            <td><input className="player_input player_num" onChange={this.handleShutouts} type="text" id="shutouts" name="shutouts" /></td>
            <td><input className="player_input player_num" onChange={this.handleGAA} type="text" id="goalsagainstaverage" name="goalsagainstaverage" /></td>
            <td><input className="player_input player_num" onChange={this.handleSP} type="text" id="savepercentage" name="savepercentage" /></td>
            <td><button className="player_button" onClick={this.handleSubmitGoalie}>Save</button></td>
        </tr>
    }
}