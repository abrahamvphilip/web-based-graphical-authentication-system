import React, {useState} from 'react'
import Uploader from '../image-preview/Uploader'
import './Register.css'

function Register() {

  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
  })

  const [errors, setErrors] = useState("")

  const handleChange = (ev) => {
    setInput({
      ...input,
      [ev.target.name]: ev.target.value
    })
  }

  const validateInputs = (inputValues) => {
    setErrors("")
    if(!inputValues.name && !inputValues.username && !inputValues.email){
      setErrors("The above field is required!")
      alert("Can't submit empty fields! Please fill out the required.")
    } else {
      setErrors("")
      // console.log(input)
    }
    return errors
  }

  const handleClick = (e) => {
    e.preventDefault()
    validateInputs(input)
    
    console.log("data", input)
  }

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
                value={input.name}
                name="name"
                onChange={handleChange}
              />
              <p style={{color: "red"}}>{errors}</p>
              <input 
                type="text" 
                placeholder="Username" 
                value={input.username}
                name="username"
                onChange={handleChange}
              />
              <p style={{color: "red"}}>{errors}</p>
              <input 
                type="email" 
                placeholder="Email" 
                value={input.email}
                name="email"
                onChange={handleChange}
              />
              <p style={{color: "red"}}>{errors}</p>
            </form>
          </div>
        </div>

        {/* Image Upload and Preview -> */}

        <div className="auth-image-upload">
          <Uploader 
            buttonText="Register" 
            gotoButton="Already have an Account? Login"
            onClick={handleClick}
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
