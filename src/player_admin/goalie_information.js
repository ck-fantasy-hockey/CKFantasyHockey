import InsertGoalie from './insert_goalie.js'

export default class GoalieInformation extends React.Component {
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
                <h1>Add Goalies</h1>
            </div>
        </div>
        <div className="team-info-subheader">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>GP</th>
                    <th>Goals</th>
                    <th>Assists</th>
                    <th>Shutouts</th>
                    <th>GAA</th>
                    <th>S%</th>
                </tr>
            </thead>
            <tbody>
            <InsertGoalie />
            </tbody>
        </table>
        </div>
    </div>    
    }
}