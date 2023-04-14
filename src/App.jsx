import React, { useState } from 'react'

import './App.css'
import Square from './components/Square'

function App() {
  
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState(true)
  const [winner, setWinner] = useState('')
  
  const clickHandler = () => {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setPlayer(true)
    setWinner('')
  }
  
  const calculateWinner = (array) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    if (winner) {
      return winner
    }
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        const winner = `${array[a]} won!`
        setWinner(winner)
        return winner
      }
    } 
    if (!array.includes('')) {
      const tie = 'It is a tie!'
      setWinner(tie)
      return tie
    }
    return 'Who will win?'
  }

  console.log(squares, player)

  return (
    <div className="App">
      <h1 className="title">Play Tic-Tac-Toe!</h1>
      <span>{calculateWinner(squares)}</span>
        <div className="container">
          {squares.map((value, index) => {
            return (
                <Square
                  const
                  key={index}
                  setSquares={setSquares}
                  index={index}
                  squareValue={value}
                  squares={squares}
                  player={player}
                  setPlayer={setPlayer}
                />)
            })
          }
        </div>
        <button className="reset-button" onClick={clickHandler}>Reset</button>
    </div>
  )
}

export default App
