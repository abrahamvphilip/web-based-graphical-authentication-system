import React, {useRef} from 'react'
import Uploader from '../image-preview/Uploader'
import './Login.css'

function Login() {

  const usernameRef = useRef()
  const emailRef = useRef()

  return (
    <div className="auth-register">
      <div className="top">
          <div className="project-name">
            Web based Graphical <br /> Authentication System
          </div>
          <div className="current-page">
            Login
          </div>
        </div>
        <div className="auth-container">
          <div className="auth-text">
            Login
          </div>
          <div className="auth-form">
            <form>
              <input type="text" placeholder="Username" ref={usernameRef}/>
              <input type="email" placeholder="Email" ref={emailRef}/>
            </form>
          </div>
        </div>

        {/* Image Upload and Preview -> */}

        <div className="auth-image-upload">
          <Uploader 
            buttonText="Login" 
            gotoButton="Don't have an Account? Register"
          />
        </div>
        
        <div className="bottom">
          <div className="creator-detail">
            <p className="creator">A project by Khushi <br /> and Philip</p>
          </div>
        </div>
    </div>
  )
}

export default Login

