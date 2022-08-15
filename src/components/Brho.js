import * as React from 'react'
import './Brho.css'

function Brho({ name, image }) {
  return (
    <div className='brho-box'>
      <img src={image} alt='' className='brho-img'></img>
      <div className='brho-name'>
        <p>{name}</p>
      </div>

    </div>
  )
}

export default Brho