export default class InsertPlayer extends React.Component {
    render() {
        return <tr>
            <td><input className="player_input" type="text" id="name" name="name" /></td>
            <td><input className="player_input" type="text" id="team" name="team" /></td>
            <td><input className="player_input" type="text" id="status" name="status" /></td>
            <td><input className="player_input" type="text" id="position" name="position" /></td>
            <td><input className="player_input" type="text" id="goals" name="goals" /></td>
            <td><input className="player_input" type="text" id="assists" name="assists" /></td>
            <td><input className="player_input" type="text" id="points" name="points" /></td>
            <td><input className="player_input" type="text" id="gamewinninggoals" name="gamewinninggoals" /></td>
            <td><input className="player_input" type="text" id="penaltyminutes" name="penaltyminutes" /></td>
            <td><input className="player_input" type="text" id="minutesplayed" name="minutesplayed" /></td>
            <td><input className="player_input" type="text" id="blocks" name="blocks" /></td>
            <td><button className="player_button">Save</button></td>
        </tr>
    }
}