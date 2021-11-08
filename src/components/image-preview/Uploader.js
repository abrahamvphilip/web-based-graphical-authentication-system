import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import './Uploader.css'

function Uploader({buttonText, gotoButton, onClick}) {

  const [image, setImage] = useState()
  const [preview, setPreview] = useState()
  const [clicks, setClicks] = useState([])

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

  // Click Counter ->

   function f(ev){
    setClicks((prev) => ([...prev,{
            x: ev.offsetX,
            y: ev.offsetY,
       }]
    ))
    
  }
     
  useEffect(() => {
    const preview = document.querySelector("div.preview-image")

    preview.addEventListener('click', f)
    // localStorage.setItem("offsets", JSON.stringify(clicks))
    // localStorage.clear()
    // console.log(clicks)
    
    return () => {
      preview.removeEventListener("click", f)
    }
  }, [clicks])
  
  // useEffect(()=> {
  //   localStorage.setItem("offsets", JSON.stringify(clicks))
  // }, [clicks])


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
          {image ? <img id="preview-image" src={preview} alt="" />
          :
          <div className="preview-image-before"></div>
          }
        </div>
 
        <button 
          type="submit"
          className="register-submit-button"
          onClick={onClick}
        >
          {buttonText}
        </button>
        
        <Link 
          to="/"
          className="gotoLogin-button"
        >
          {gotoButton}
        </Link>
      </form>
    </div>
  )
}

export default Uploader
