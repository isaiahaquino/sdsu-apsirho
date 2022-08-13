import * as React from "react"
import seal from '../photos/seal.png'
import menu from '../photos/icons/menu-white.png'
import close from '../photos/icons/close-white.png'
import './Logo.css'

function Logo({ click, handleClick }) {
  return (
    <div className="logo">
      <img src={seal} alt="" id='seal'></img>
      <div className="titles">
        <h1 className='title'>ALPHA PSI RHO</h1>
        <h2 className='title'>ALPHA CHAPTER</h2>
      </div>
      <div className='menu-icon' onClick={handleClick} aria-hidden='true'>
        <img src={click ? close : menu} alt=''></img>
      </div>
    </div>
  )
}

export default Logo