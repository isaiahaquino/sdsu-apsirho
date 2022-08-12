import * as React from 'react'
import { Link } from 'gatsby'
import './Navbar.css'


function Navbar({ click, closeMobileMenu }) {

  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/history'>HISTORY</Link>
        <Link to='/brhothers'>BRHOTHERS</Link>
        <Link to='/newsletter'>NEWSLETTER</Link>
        <Link to='/contact'>CONTACT</Link>
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
          <Link to='/history' className='nav-link' onClick={closeMobileMenu}>
            HISTORY
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/brhothers' className='nav-link' onClick={closeMobileMenu}>
            BRHOTHERS
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/newsletter' className='nav-link' onClick={closeMobileMenu}>
            NEWSLETTER
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='nav-link' onClick={closeMobileMenu}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar