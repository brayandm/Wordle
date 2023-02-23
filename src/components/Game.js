import Grid from './Grid'
import Keyboard from './Keyboard';
import { useEffect, useState } from 'react';
import useKeypress from './useKeypress';
import words from './words'
import Alert from './Alert'

function Game({ numberOfRows, numberOfCells }) {

    // const [word, setword] = useState(words[Math.floor(Math.random() * words.length)].toUpperCase().split(''))
    const [word, setword] = useState(['H', 'E', 'L', 'L', 'O'])
    const [row, setrow] = useState(0)
    const [column, setcolumn] = useState(0)
    const [gameWon, setgameWon] = useState(false)
    const [alerts, setalerts] = useState([])
    const colors = ['red', 'green', 'yellow', 'white']
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const [colorGrid, setcolorGrid] = useState(Array.from({ length: numberOfRows }, () => Array(numberOfCells).fill('white')))
    const [letterGrid, setletterGrid] = useState(Array.from({ length: numberOfRows }, () => Array(numberOfCells).fill(' ')))
    const [letterCheck, setletterCheck] = useState(new Map(letters.map(key => [key, 'white'])))

    function handleKeyword(keyword) {
        if (row != numberOfRows && gameWon == false) {
            if (keyword == 'Backspace') {
                if (column != 0) {
                    letterGrid[row][column - 1] = ' '
                    setletterGrid(letterGrid)
                    setcolumn(column - 1)
                }
            }
            else if (keyword == 'Enter') {
                if (column == numberOfCells) {
                    if (!words.includes(letterGrid[row].join('').toLowerCase())) {
                        setalerts([...alerts, <Alert key={alerts.length} message="It's not a English word" color="red" />])
                        return
                    }

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
                            letterCheck.set(letterGrid[row][i], 'green')
                            cant[word[i]] -= 1
                        }
                    }

                    for (let i = 0; i < numberOfCells; i++) {
                        if (colorGrid[row][i] != 'green') {
                            if (letterGrid[row][i] in cant && cant[letterGrid[row][i]] > 0) {
                                colorGrid[row][i] = 'yellow'
                                if (letterCheck.get(letterGrid[row][i]) != 'green') {
                                    letterCheck.set(letterGrid[row][i], 'yellow')
                                }
                                cant[letterGrid[row][i]] -= 1
                            }
                            else {
                                colorGrid[row][i] = 'red'
                                if (letterCheck.get(letterGrid[row][i]) != 'green' && letterCheck.get(letterGrid[row][i]) != 'yellow') {
                                    letterCheck.set(letterGrid[row][i], 'red')
                                }
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
                    setletterCheck(letterCheck)

                    if (allGreen) {
                        setgameWon(true)
                        setalerts([...alerts, <Alert message="You won!" color="green" />])
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

    return <div className="Game">
        {alerts}
        <Grid numberOfRows={numberOfRows} numberOfCells={numberOfCells} colorGrid={colorGrid} letterGrid={letterGrid} />
        <br />
        <Keyboard onClick={handleKeyword} letterCheck={letterCheck} />
    </div>
}

export default Game;