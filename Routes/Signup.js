import React from 'react'
import Footer from '../components/Footer'
import Signup from '../components/Inputs-sign'
import Navbar from '../components/Navbar'
import Back from '../components/Back'

export default function Login() {
  return (
    <>
      <Navbar/>
      <Back/>
      <div>

      <Signup/>
      </div>
      
      <div className='login-foot'>
      <Footer/>
      </div>
      
    </>
  )
}
