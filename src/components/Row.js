import Cell from './Cell'
import './Row.css'

function Row() {
    const numberOfCells = 5;

    let row = [];

    for (let i = 0; i < numberOfCells; i++) {
        const colors = ['red', 'green', 'yellow', 'white'];
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        row.push(<Cell
            color={colors[Math.floor(Math.random() * colors.length)]}
            letter={letters[Math.floor(Math.random() * letters.length)]} />)
    }

    return (
        <div className="row">
            {row}
        </div>
    )
}

export default Row;
