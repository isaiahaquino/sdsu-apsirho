import * as React from "react"
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />

      { children }

      <Footer />
    </div>
  )
}

export default Layout