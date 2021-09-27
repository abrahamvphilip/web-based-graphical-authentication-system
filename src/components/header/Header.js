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
        <div className="register-container">
          <button className="register">Register</button>
        </div>
        <div className="login-container">
          <button className="login">Login</button>
        </div>
      </main>
      <div className="bottom">
        <div className="creator-detail">
          <p className="creator">A project by Khushi <br /> and Philip</p>
        </div>
      </div>
    </div>
  )
}

export default Header

