import Row from './Row'
import './Grid.css'

function Grid({ word, numberOfRows, numberOfCells, colorGrid, letterGrid }) {

    let grid = [];

    for (let i = 0; i < numberOfRows; i++) {
        grid.push(<Row numberOfCells={numberOfCells} colorRow={colorGrid[i]} letterRow={letterGrid[i]} />)
    }

    return (
        <div className="grid">
            {grid}
        </div >
    )
}

export default Grid;