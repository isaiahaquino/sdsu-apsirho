import * as React from "react"
import './Footer.css'
import youtube from '../photos/icons/youtube-black.png'
import instagram from '../photos/icons/instagram-black.png'
import twitter from '../photos/icons/twitter-black.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; Copyright 2022, Alpha Psi Rho | Alpha Chapter</p>
        
        <div className='social-links'>
          <a href='https://www.instagram.com/sdsuapsirho/?hl=en' aria-label="instagram"><img src={instagram} alt=''></img></a>
          <a href='https://twitter.com/sdsuapsirho?lang=en' aria-label="twitter"><img src={twitter} alt=''></img></a>
          <a href='https://www.youtube.com/user/APSIRHO/featured' aria-label="youtube"><img src={youtube} alt=''></img></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer