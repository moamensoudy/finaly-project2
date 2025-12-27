import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TextField from '@mui/material/TextField';
import "./OTPcss.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function OTB() {
     const [email, setEmail] = useState("");
      
    function handleLogin(e) {
        e.preventDefault();
        if (!email ) {
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
                                    <div className='header'>
                                 <p>   Please Enter 5 Digit Code Sent To. </p>
                                        
                                    <h3>example@123.gmail.com</h3></div>    
             <TextField label="" variant="outlined"sx={{marginBottom:"15px"}} type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  
                    <button type='submit' disabled={!email}>Verify</button>
                
            </div>
                            
                            </div>
                          
                         <div className='Signup3'>
                                Don't have an account?
                            <Link to="Signup "className='Signup2' >
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