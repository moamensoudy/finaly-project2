import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TextField from '@mui/material/TextField';
import "./Resendemail.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const Navigate = useNavigate();
     const [email, setEmail] = useState("");
      
    function handleLogin(e) {
        e.preventDefault();
        if (!email.trim()) {
            alert("please fill all fields")
            return;
        }
       console.log(email)
   }
   

    return (   
        <> 
         <div className='contaner2'>    
           <div className='headertype10'>
                <h3>
                    LOGO
                </h3>
                <h1>Welcome TO ZUMRA! </h1>
                <h4>Please Reset your password</h4>
                </div>
           <div className='login-contaner0'>
                
                <div className='box-left10'>
                    <form className='alltext10' onSubmit={handleLogin}>
                <div className='logcss10'>
        
                            <div className="buttons10">
                <div className='header10'><p> Send email confirmation </p></div>    
             <TextField  fullWidth  label="Email" variant="outlined"sx={{marginBottom:"15px"}} type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  
                     
                    
            
                    <button type='button' disabled={!email} onClick={()=>{ if (!email.trim()) {
          
                                        alert("please fill all fields")
           
                                        return;
                                    }
                                        Navigate("/")
                                    }}>Send</button>
                
            </div>
                            
                        </div>
                         <div className='Signup10'>
                                Don't have an account?
                            <Link to="/Signup" className='Signup10' >
                                signup  
                            </Link></div>
                        </form></div>
                    
            <div className='image-right10'>
           <div className='image-box10'>
                     <InsertPhotoIcon sx={{fontSize:"280px",margin:"40%"}} />
              </div>
                </div>
                </div>
                </div>
        </>
    )
}