import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

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
            <Link exact to="/register">
              <button className="register">Register</button>
            </Link>
          </div>
          <div className="login-container">
              <Link exact to="/login">
                <button className="login">Login</button>
              </Link>
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

