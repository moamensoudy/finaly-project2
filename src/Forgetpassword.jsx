import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TextField from '@mui/material/TextField';
import "./Forgetpasswordcss.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Forgetpassword() {
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
         <div className='allcontaner20'>    
           <div className='headertype20'>
                <h3>
                    LOGO
                </h3>
                <h1>Welcome TO ZUMRA! </h1>
                <h4>Please Reset your password</h4>
                </div>
           <div className='contaner20'>
                
                <div className='box-left20'>
                    <form className='alltext20' onSubmit={handleLogin}>
                
            

                <div className='logcss20'>
        
                            <div className="buttons20">
                <div className='header20'><p>   Enter the email to reset your password. </p></div>    
             <TextField  fullWidth  label="Email" variant="outlined"sx={{marginBottom:"15px"}} type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  
                     
                    
            
                    <button type='button1' disabled={!email} onClick={()=>{ if (!email.trim()) {
          
                                        alert("please fill all fields")
           
                                        return;
                                    }
                                        Navigate("/OTP")
                                    }}>Send OTP</button>
                
            </div>
                            
                        </div>
                         <div className='Signup20'>
                                Don't have an account?
                            <Link to="Signup" className='Signup20' >
                                signup  
                            </Link></div>
                        </form></div>
                    
            <div className='image-right20'>
           <div className='image-box20'>
                     <InsertPhotoIcon sx={{fontSize:"280px",margin:"30%"}} />
              </div>
                </div>
                </div>
                </div>
        </>
    )
}