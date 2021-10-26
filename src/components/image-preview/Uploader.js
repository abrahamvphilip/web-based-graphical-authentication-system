import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import './Uploader.css'

function Uploader() {

  const [image, setImage] = useState()
  const [preview, setPreview] = useState()
  const fileInputRef = useRef()

  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(image)
    } else {
      setPreview(null)
    }
  }, [image])

  return (
    <div className="uploader-container">
      <div className="uploader-info">
        <p className="uploader-info-text">Select upto 4 click-points as your <br /> graphical password</p>
      </div>
      <form action="/">
        <button 
          className="image-upload-button"
          onClick={(e) => {
            e.preventDefault()
            fileInputRef.current.click()
          }}
        >
          Choose Image
        </button>
        <input 
          className="input-file" type="file" 
          ref={fileInputRef}
          accept="image/*"

          onChange={(e) => {
            const file = e.target.files[0]
            if(file && file.type.substring(0,5) === "image"){
              setImage(file)
            } else {
              setImage(null)
            }
          }}
        />

        <div className="preview-image">
          {image ? <img src={preview} alt="" />
          :
          <div className="preview-image-before"></div>
          }
        </div>
        <button 
          type="submit"
          className="register-submit-button"
        >
          Register
        </button>
        <Link 
          to="/login"
          className="gotoLogin-button"
        >
          Already have an account? Go to Login
        </Link>
      </form>
    </div>
  )
}

export default Uploader
