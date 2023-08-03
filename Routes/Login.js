import React from 'react'
import Footer from '../components/Footer'
import Inputs from '../components/Inputs'
import Navbar from '../components/Navbar'
import Back from '../components/Back'

export default function Login() {
  return (
    <>
      <Navbar/>
      <Back/>
      <div>

      <Inputs/>
      </div>
      
      <div className='login-foot'>
      <Footer/>
      </div>
      
    </>
  )
}
