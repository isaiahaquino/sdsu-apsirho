import * as React from 'react'
import { Link } from 'gatsby'
import './Navbar.css'

function Navbar({ click, closeMobileMenu }) {

  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/chapters'>CHAPTERS</Link>
        <Link to='/brhothers'>BRHOTHERS</Link>
        <Link to='/join'>JOIN APSIRHO</Link>
      </div>

      <ul className={click ? 'mobile-nav active' : 'mobile-nav'}>
        <li className='nav-item'>
          <Link to='/' className='nav-link' onClick={closeMobileMenu}>
            HOME
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link' onClick={closeMobileMenu}>
            ABOUT
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/chapters' className='nav-link' onClick={closeMobileMenu}>
            CHAPTERS
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/brhothers' className='nav-link' onClick={closeMobileMenu}>
            BRHOTHERS
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/join' className='nav-link' onClick={closeMobileMenu}>
            JOIN APSIRHO
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar