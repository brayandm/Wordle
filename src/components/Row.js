import Cell from './Cell'
import './Row.css'

function Row({ numberOfCells, colorRow, letterRow }) {

    let row = [];

    for (let i = 0; i < numberOfCells; i++) {
        row.push(<Cell key={i}
            color={colorRow[i]}
            letter={letterRow[i]} />)
    }

    return (
        <div className="row">
            {row}
        </div>
    )
}

export default Row;
