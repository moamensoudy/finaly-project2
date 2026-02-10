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
         <div className='contaner'>    
           <div className='headertype1'>
                <h3>
                    LOGO
                </h3>
                <h1>Welcome TO ZUMRA! </h1>
                <h4>Please Reset your password</h4>
                </div>
           <div className='login-contaner1'>
                
                <div className='box-left1'>
                    <form className='alltext1' onSubmit={handleLogin}>
                
            

                <div className='logcss1'>
        
                            <div className="buttons">
                <div className='header'><p> Send email confirmation </p></div>    
             <TextField  fullWidth  label="Email" variant="outlined"sx={{marginBottom:"15px"}} type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  
                     
                    
            
                    <button type='button' disabled={!email} onClick={()=>{ if (!email.trim()) {
          
                                        alert("please fill all fields")
           
                                        return;
                                    }
                                        Navigate("/")
                                    }}>Send</button>
                
            </div>
                            
                        </div>
                         <div className='Signup2'>
                                Don't have an account?
                            <Link to="Signup" className='Signup2' >
                                signup  
                            </Link></div>
                        </form></div>
                    
            <div className='image-right1'>
           <div className='image-box1'>
                     <InsertPhotoIcon sx={{fontSize:"280px",margin:"30%"}} />
              </div>
                </div>
                </div>
                </div>
        </>
    )
}