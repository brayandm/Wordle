import './Cell.css';

function Cell({ color, letter }) {
    return (
        <div className={'cell cell-' + color}>
            <p> {letter}</p>
        </div>
    )
}

export default Cell;
