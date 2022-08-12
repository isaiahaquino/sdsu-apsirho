import * as React from "react"
import { useState } from 'react'
import Logo from "./Logo"
import Navbar from "./Navbar"

function Header() {

  const [click, setClick] = useState(false)

  const handleClick = () => { setClick(!click) }
  const closeMobileMenu = () => { setClick(false) }

  return (
    <header>
      <Logo 
        click={click}
        handleClick={handleClick}
      />
      <Navbar 
        click={click}
        closeMobileMenu={closeMobileMenu}
      />
    </header>
  )
}

export default Header