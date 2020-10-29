export default class Roster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            1: {
                playerID: "1",
                name: "Henrik Lundqvist",
                postion: "G",
                wins: "54",
                losses: "18",
                points: "105"
            },
            2:  {
                playerID: "2",
                name: "Ron Hextall",
                position: "G",
                wins: "78",
                losses: "23",
                points: "178"
            }    
        }
    }

    render() {
        return <table>
            <thead>
                <tr>
                    <th>Player ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Henrik Lundqvist</td>
                    <td>G</td>
                    <td>54</td>
                    <td>18</td>
                    <td>105</td>
                </tr>
            </tbody>
        </table>;
    }
}