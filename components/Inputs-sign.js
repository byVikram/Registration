
import { useNavigate } from "react-router-dom";
import "./Inputssignstyle.css"
import React,{useState} from 'react'


export default function Signup() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [message, setMessage] = useState('');
    const navigate=useNavigate()

    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
 
    const[error,setError]=useState(false)

    const handleRegister = async () => {
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password, fname, lname })
        });
    
        const data = await response.json();
        setMessage(data.message);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if(fname.length===0 || lname.length===0){
          setError(true)
        }

      }



      

  return (
    <div className="mainsign">
        <form onSubmit={handleSubmit}>
        <div className="naming" style={{padding:"1rem"}}>
                <input className="fname" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} type="text" required/>
                <input className="lname" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} type="text" />

            </div>
            {error ? <label>name required</label>:""}
            
            <div style={{padding:"1rem"}}>
                <input className="name" placeholder="Example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} type="text" required/>
            </div>
            <div style={{padding:"1rem"}}>

                <input className="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required></input>
                
            </div>


        </form>

     
        <div className="hellosign">
        <div>
            <button id="t" className="t" onClick={handleRegister} type="submit">Sign Up</button>
            {message === "User registered successfully" ? navigate('/signedup'):<span/>}
            {message === "Failed to register user" ? "Failed to register":<span/>}


            
            </div>
            <div>{message && <p>{message}</p>}</div>
            
        
        </div>
        
        
        </div>
  )
}
