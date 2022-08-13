import * as React from "react"
import { useState } from "react"
import Footer from './Footer'
import Logo from './Logo'
import Navbar from './Navbar'
import './Layout.css'

function Layout({ children }) {

  const [click, setClick] = useState(false)

  const handleClick = () => { setClick(!click) }
  const closeMobileMenu = () => { setClick(false) }

  return (
    <div className="layout">
      <div className="header">
        <Logo 
          click={click}
          handleClick={handleClick}
        />
        <Navbar
          click={click}
          closeMobileMenu={closeMobileMenu}
        />
      </div>

      <main>
        { children }
      </main>

      <Footer />
    </div>
  )
}

export default Layout