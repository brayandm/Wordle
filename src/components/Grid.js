import Row from './Row'
import './Grid.css'

function Grid() {

    const numberOfRows = 6;

    let grid = [];

    for (let i = 0; i < numberOfRows; i++) {
        grid.push(<Row />)
    }

    return (
        <div className="grid">
            {grid}
        </div >
    )
}

export default Grid;