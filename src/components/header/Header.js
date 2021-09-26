import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="top">
        <div className="project-name">
          Web based Graphical <br /> Authentication System
        </div>
        <div className="current-page">
          Home
        </div>
      </div>
      <main className="main-nav">
        <div className="register">
          Register
        </div>
        <div className="login">
          Login
        </div>
      </main>
      <div className="bottom">
        <div className="creator-detail">
          A project by Khushi <br /> and Philip
        </div>
      </div>
    </div>
  )
}

export default Header

