import React from 'react'
import { Link } from 'react-router-dom';
import '../components/Btnsstyle.css';

export default function Btns() {
  return (
    <>
    <div>
    <div className='content'>
    <Link to="/login"><button> Login</button></Link>
        <Link to="/signup"><button>SignUp</button></Link>
    </div>
    </div>
    </>
  )
}
