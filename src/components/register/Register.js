import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className="auth-register">
      <div className="top">
          <div className="project-name">
            Web based Graphical <br /> Authentication System
          </div>
          <div className="current-page">
            Register
          </div>
        </div>
        <div className="auth-container">
          <div className="auth-text">
            Register
          </div>
          <div className="auth-form">
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <div className="auth-image-upload">
                {/* Uploader code goes here */}
              </div>
            </form>
          </div>
        </div>
        <div className="bottom">
          <div className="creator-detail">
            <p className="creator">A project by Khushi <br /> and Philip</p>
          </div>
        </div>
    </div>
  )
}

export default Register

