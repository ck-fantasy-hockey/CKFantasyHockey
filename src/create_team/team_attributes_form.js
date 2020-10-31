export default class TeamAttributesForm extends React.Component {
    render() {
        return <form action='/' method='GET'>
            <label>Team Name</label>
            <input type="text" name='teamName'></input>
            <label>League ID</label>
            <input type="text" name='leagueID' defaultValue={dataFromServer.leagueID} disabled></input>
            <input type="submit" value='Make Team'></input>
        </form>

    }
}