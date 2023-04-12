import React, { useState } from 'react'

import './App.css'
import Square from './Square'

function App() {

  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState(true)

  const handleClick = () => {
    setSquares(['', '', '', '', '', '', '', '', ''])
    setPlayer(true)
  }

  return (
    <div className="App">
      <h1 className="title">Play Tic Tac Toe!</h1>
        <button className="reset-button" onClick={handleClick}>Reset</button>
        <div className="container">
          {squares.map((value, index) => {
            return (
                <Square
                  const
                  setSquares={setSquares}
                  index={index}
                  squareValue={value}
                  squares={squares}
                  player={player}
                  setPlayer={setPlayer}
                />
            )
          })}
        </div>
    </div>
  )
}

export default App
