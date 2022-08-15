import * as React from "react"
import { Link } from 'gatsby'
import menu from '../photos/icons/menu.png'
import close from '../photos/icons/close.png'
import './Logo.css'

function Logo({ click, handleClick }) {
  return (
    <div className="logo">
      <Link to='/'>
      <div className="titles">
        <h1 className='title'>ALPHA PSI RHO</h1>
        <h2 className='title'>ALPHA CHAPTER</h2>
      </div>
      </Link>
      <div className='menu-icon' onClick={handleClick} aria-hidden='true'>
        <img src={click ? close : menu} alt=''></img>
      </div>
    </div>
  )
}

export default Logo