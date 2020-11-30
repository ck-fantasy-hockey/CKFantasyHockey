export default class PlayerFunctions extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
                <button className='btn' onClick={() => {this.props.functions.dropPlayer(this.props.playerID)}}>
                    <div className="tooltip">
                        <span className="tooltiptext">Drop Player</span>
                        <i className="fas fa-arrow-down"></i>
                    </div>
                </button>
                <button className='btn'>
                    <div className="tooltip">
                        <span className="tooltiptext">Trade Player</span>
                        <i className="fas fa-arrows-alt-h"></i>
                    </div>
                </button>
                <button className='btn'>
                    <div className="tooltip">
                        <span className="tooltiptext">Bench Player</span>
                        <i className="fas fa-couch"></i>
                    </div>
                </button>
        </div>
    }
}