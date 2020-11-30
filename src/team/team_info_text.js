export default class TeamInformationText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seasonEndsAlternate: this.convertDateToPage()
        }
    }

    convertDateToPage = () => {
        const oldDate = this.props.leagueInfo.seasonEnds
        const newDate = oldDate.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2")
        return newDate
    }

    forceDatePickerEvent = () => {
            let pickerValue = document.getElementById('datepicker').value
            this.props.functions.updateSeasonEnds(pickerValue)
    }



    render() {
        let result
        if (this.props.editingAttributes) {
            result = <div className='team-info-text'>
            <form>
                <h1> Team Name: 
                    <input type='text' className='tall-input' onChange={this.props.functions.updateTeamName} defaultValue={this.props.teamName}></input>
                </h1>
                <p>Season Ends:
                    <input type='date' className='reg-input' id='datepicker' onChange={this.forceDatePickerEvent} defaultValue={this.state.seasonEndsAlternate}></input>
                </p>
                <p>
                    League:
                    <input type='text' className='reg-input' value={this.props.leagueInfo.leagueName} disabled></input>
                </p>
                <p>
                    League ID:
                    <input type='text' className='reg-input' value={this.props.leagueInfo.leagueID} disabled></input>
                </p>
            </form>
        </div>
        } else {
            result = <div className='team-info-text'>
            <h1>{this.props.teamName}</h1>
            <p>Season Ends: {this.props.leagueInfo.seasonEnds}</p>
            <p>League: {this.props.leagueInfo.leagueName}</p>
            <p>League ID: {this.props.leagueInfo.leagueID}</p>
            </div>
        }

        return result

    }
}