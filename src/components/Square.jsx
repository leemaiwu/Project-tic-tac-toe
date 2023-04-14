import React from 'react'

import './Square.css'

const Square = (props) => {
    const { index, squareValue, setSquares, player, setPlayer } = props

    const clickHandler = () => {
        if (!squareValue) {
            const squaresCopy = [...props.squares]
            if (player) {
                squaresCopy.splice(index, 1, 'X')
                setSquares(squaresCopy)
                setPlayer(false)
            } else {
                squaresCopy.splice(index, 1, 'O')
                setSquares(squaresCopy)
                setPlayer(true)
            }
        }
    }

    return (
        <div className="square" onClick={clickHandler}>
            {squareValue === 'O' ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" alt="'O' icon"/> : squareValue}
        </div>
    )
}

export default Square
