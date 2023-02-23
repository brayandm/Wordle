import Grid from './Grid'
import Keyboard from './Keyboard';
import { useEffect, useState } from 'react';
import useKeypress from './useKeypress';

function Game({ numberOfRows, numberOfCells }) {
    const [row, setrow] = useState(0)
    const [column, setcolumn] = useState(0)
    const word = ['H', 'E', 'L', 'L', 'O']
    const colors = ['red', 'green', 'yellow', 'white']
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const [colorGrid, setcolorGrid] = useState(Array.from({ length: numberOfRows }, () => Array(numberOfCells).fill('white')))
    const [letterGrid, setletterGrid] = useState(Array.from({ length: numberOfRows }, () => Array(numberOfCells).fill(' ')))

    function handleKeyword(keyword) {
        if (row != numberOfRows) {
            if (keyword == 'Backspace') {
                if (column != 0) {
                    letterGrid[row][column - 1] = ' '
                    setletterGrid(letterGrid)
                    setcolumn(column - 1)
                }
            }
            else if (keyword == 'Enter') {
                if (column == numberOfCells) {

                    let cant = {}

                    for (let i = 0; i < numberOfCells; i++) {
                        if (word[i] in cant) {
                            cant[word[i]] += 1
                        }
                        else {
                            cant[word[i]] = 1
                        }
                    }

                    for (let i = 0; i < numberOfCells; i++) {

                        if (letterGrid[row][i] == word[i]) {
                            colorGrid[row][i] = 'green'
                            cant[word[i]] -= 1
                        }
                    }

                    for (let i = 0; i < numberOfCells; i++) {
                        if (colorGrid[row][i] != 'green') {
                            if (letterGrid[row][i] in cant && cant[letterGrid[row][i]] > 0) {
                                colorGrid[row][i] = 'yellow'
                                cant[letterGrid[row][i]] -= 1
                            }
                            else {
                                colorGrid[row][i] = 'red'
                            }
                        }
                    }

                    let allGreen = true

                    for (let i = 0; i < numberOfCells; i++) {
                        if (colorGrid[row][i] != 'green') {
                            allGreen = false
                        }
                    }

                    setcolumn(0)
                    setrow(row + 1)
                    setcolorGrid(colorGrid)

                    if (allGreen) {
                        alert('You win!')
                    }
                }
            }
            else if (letters.includes(keyword.toUpperCase())) {
                if (column != numberOfCells) {
                    keyword = keyword.toUpperCase();
                    letterGrid[row][column] = keyword
                    setletterGrid(letterGrid)
                    setcolumn(column + 1)
                }
            }
        }
    }

    useKeypress(handleKeyword)

    console.log(letterGrid)
    return <div className="Game">
        <Grid word={word} numberOfRows={numberOfRows} numberOfCells={numberOfCells} colorGrid={colorGrid} letterGrid={letterGrid} />
        <br />
        <Keyboard onClick={handleKeyword} />
    </div>
}

export default Game;