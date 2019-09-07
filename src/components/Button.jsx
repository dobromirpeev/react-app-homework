import React from 'react'

export const Button = ({ name, imageState, imageIndex }) => {

  return(
    <button onClick={imageState} data-image={imageIndex}>{name}</button>
  )
}