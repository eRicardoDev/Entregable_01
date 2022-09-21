import React from 'react'

const ButtonNext = ({randomColor, getRandomAll}) => {

    const backgroundObj ={backgroundColor: randomColor}
  return (
    <div>
        <button className='card_btn' style={backgroundObj} onClick={getRandomAll}>&#62;</button>
    </div>
  )
}

export default ButtonNext