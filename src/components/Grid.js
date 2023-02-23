import Row from './Row'
import './Grid.css'

function Grid({ numberOfRows, numberOfCells }) {

    let grid = [];

    for (let i = 0; i < numberOfRows; i++) {
        grid.push(<Row numberOfCells={numberOfCells} />)
    }

    return (
        <div className="grid">
            {grid}
        </div >
    )
}

export default Grid;