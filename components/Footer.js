import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"
import './Footerstyle.css'

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='locate'>
                        <div><h4><FaHome size={20} style={{color:"white"}}/></h4></div>
                        <div className='two'><p>Vikram Malnad college</p></div>
                        
                </div>
                <div className='locate'>
                    <div><h4><FaPhone size={20} style={{color:"white"}}/></h4></div>
                    <p className='two'>8310744285</p>
                </div>

                <div className='locate'>
                    <div><h4><FaMailBulk size={20} style={{color:"white"}}/></h4></div>
                    <p className='two'>kmvikram2001@gmail.com</p>
                </div>
                
                
            </div>
            
            
            <div className='right'>
                <div className='social'>
                    <h1><p>About me</p></h1>
                    <p>I am a new developer</p>
                    <Link className='face' to={"https://www.facebook.com/"}><FaFacebook size={20} style={{color:"white"}}/></Link>
                    <Link className='face' to={"https://www.facebook.com/"}><FaTwitter size={20} style={{color:"white"}}/></Link>
                    <Link className='face' to={"https://www.facebook.com/"}><FaLinkedin size={20} style={{color:"white"}}/></Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}
