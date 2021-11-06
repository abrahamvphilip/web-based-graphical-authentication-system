import React, {useRef, useState} from 'react'
import Uploader from '../image-preview/Uploader'
import './Register.css'
// import {useAuth} from '../../contexts/AuthContext'

function Register() {

  const nameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()

  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
  })

  const handleChange = (ev) => {
    setInput({
      ...input,
      [ev.target.name]: ev.target.value
    })
    console.log(input)
  }

  // const {signup, currentUser} = useAuth()

  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   // create passwordRef, assign values and replace below in signup()
  //   try {
  //     setError('')
  //     await signup(emailRef.current.value, usernameRef.current.value)  
  //   } catch {
  //     setError('Failed to register the user')
  //   }
  // }

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
              <input 
                type="text" 
                placeholder="Name" 
                ref={nameRef}
                value={input.name}
                name="name"
                onChange={handleChange}
              />
              <input 
                type="text" 
                placeholder="Username" 
                ref={usernameRef}
                value={input.username}
                name="username"
                onChange={handleChange}
              />
              <input 
                type="email" 
                placeholder="Email" 
                ref={emailRef}
                value={input.email}
                name="email"
                onChange={handleChange}
              />
            </form>
          </div>
        </div>

        {/* Image Upload and Preview -> */}

        <div className="auth-image-upload">
          <Uploader 
            buttonText="Register" 
            gotoButton="Already have an Account? Login"
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

export default Register

