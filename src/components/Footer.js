import * as React from "react"
import './Footer.css'
import youtube from '../photos/icons/youtube-white.png'
import instagram from '../photos/icons/instagram-white.png'
import twitter from '../photos/icons/twitter-white.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h1>CONTACT US</h1>
          <p>Email: <a href="mailto:media.apsirho@gmail.com">media.apsirho@gmail.com</a></p>
        </div>
        
        <div>
          <div className="social-links">
            <a href='https://www.instagram.com/sdsuapsirho/?hl=en' aria-label="instagram"><img src={instagram} alt=''></img></a>
            <a href='https://twitter.com/sdsuapsirho?lang=en' aria-label="twitter"><img src={twitter} alt=''></img></a>
            <a href='https://www.youtube.com/user/APSIRHO/featured' aria-label="youtube"><img src={youtube} alt=''></img></a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>&copy; 2023 Alpha Psi Rho | Alpha Chapter</p>
      </div>
    </footer>
  )
}

export default Footer