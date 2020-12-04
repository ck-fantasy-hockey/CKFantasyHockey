import InsertPlayer from './insert_player.js'

export default class PlayerInformation extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEditAccount = (event) => {
        event.preventDefault();
        window.location.href = "/dashboard?token="+localStorage.getItem('usertoken');
    }

    render() {
    return <div className="team-info">
        <div className="team-info-primary">
            <div className="team-info-header">
                <img className='team-info-image' src='/static/img/hockey-team.jpg' />
            </div>
            <div className='team-info-text'>
                <h1>Add Player</h1>
            </div>
        </div>
        <div className="team-info-subheader">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Position</th>
                    <th>GP</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Points</th>
                    <th>GWG</th>
                    <th>P/M</th>
                    <th>Min P</th>
                    <th>Blocks</th>
                </tr>
            </thead>
            <tbody>
            <InsertPlayer />
            </tbody>
        </table>
        </div>
    </div>    
    }
}