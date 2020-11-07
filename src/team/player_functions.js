export default class PlayerFunctions extends React.Component {
    render() {
        return <div>
                <button>
                    <div className="tooltip">
                        <span className="tooltiptext">Drop Player</span>
                        <i className="fas fa-arrow-down"></i>
                    </div>
                </button>
                <button>
                    <div className="tooltip">
                        <span className="tooltiptext">Trade Player</span>
                        <i className="fas fa-arrows-alt-h"></i>
                    </div>
                </button>
                <button>
                    <div className="tooltip">
                        <span className="tooltiptext">Bench Player</span>
                        <i className="fas fa-couch"></i>
                    </div>
                </button>
        </div>
    }
}