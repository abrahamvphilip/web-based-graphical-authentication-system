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
          <h1 className="register">Register</h1>
        </div>
        <div className="login-container">
          <h1 className="login">Login</h1>
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

