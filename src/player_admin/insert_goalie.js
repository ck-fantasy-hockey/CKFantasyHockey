export default class InsertGoalie extends React.Component {
    render() {
        return <tr>
            <td><input className="player_input player_text" type="text" id="name" name="name" /></td>
            <td><input className="player_input player_text" type="text" id="team" name="team" /></td>
            <td><input className="player_input player_text" type="text" id="status" name="status" /></td>
            <td><input className="player_input player_text" type="text" id="position" name="position" /></td>
            <td><input className="player_input player_num" type="text" id="gamesplayed" name="gamesplayed" /></td>
            <td><input className="player_input player_num" type="text" id="goals" name="goals" /></td>
            <td><input className="player_input player_num" type="text" id="assists" name="assists" /></td>
            <td><input className="player_input player_num" type="text" id="shutouts" name="shutouts" /></td>
            <td><input className="player_input player_num" type="text" id="goalsagainstaverage" name="goalsagainstaverage" /></td>
            <td><input className="player_input player_num" type="text" id="savepercentage" name="savepercentage" /></td>
            <td><button className="player_button">Save</button></td>
        </tr>
    }
}