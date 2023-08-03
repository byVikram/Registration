import "./Inputsstyle.css"
import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [message, setMessage] = useState('');
    const navigate=useNavigate()

    const handleRegister = async () => {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
    
        const data = await response.json();
        setMessage(data.message);
      };

  return (
    <div className="main">
        <form>
            <div style={{padding:"1rem"}}>
                <input className="name" placeholder="Example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} type="text" required/>
            </div>
            <div style={{padding:"1rem"}}>

                <input className="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                
            </div>

        </form>

     
        <div className="hello">
          <div>
        <button className="t" onClick={handleRegister} type="submit">Login</button>
        {message === "Logged in" ? navigate('/loggedin'):<span/>}

       
        </div>
        <div>{message && <p>{message}</p>}</div>        
        </div>
        
        
        </div>
        
        
       

  )
}
