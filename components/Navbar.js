import { Link } from "react-router-dom"
import "./Navbarstyle.css"

import React,{useState} from 'react'
import {FaBars,FaTimes} from "react-icons/fa"

export default function Navbar() {
    const[click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);
    const[color,setColor]=useState(false)
    const changeColor = () =>{
        if (window.scrollY >= 1){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeColor)
  return (

    <div className={color? "header-bg":"header  "}>
        <Link to={"/"}>
            <h1>Registration</h1>
            </Link>

            <ul className={click ? 'nav-menu active' : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
              
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:"white"}}/>):
                (<FaBars size={20} style={{color:"white"}}/>)}
 

            </div>
        
      
    </div>

  )
}
