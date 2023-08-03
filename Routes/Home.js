import React from 'react'
import Navbar from '../components/Navbar'
import Btns from '../components/Btns'
import Back from '../components/Back'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Back/>
        <Navbar/>
        <Btns/>
        <div className='foot'>
        <Footer/>
        </div>
        
      
    </>
  )
}
