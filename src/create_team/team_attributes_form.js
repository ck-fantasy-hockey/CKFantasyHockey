export default class TeamAttributesForm extends React.Component {
    render() {
        return <div className='form'>
            <form action='/' method='GET'>
            <div className='form-item'>
            <label>Team Name</label>
            <input type="text" name='teamName'></input>
            </div>
            <div className='form-item'><label>League ID</label>
            <input type="text" name='leagueID' defaultValue={dataFromServer.leagueID} disabled></input></div>
            <div className='form-item submit-button'> <input type="submit" value='Make Team'></input></div>
            
           
        </form>
        </div>

    }
}