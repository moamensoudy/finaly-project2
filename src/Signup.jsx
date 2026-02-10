import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TextField from '@mui/material/TextField';
import "./Signup.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
     const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
     
    function handleLogin(e) {
        e.preventDefault();
        if (!email || !password) {
            alert("please fill all fields")
            return;
        }
       console.log(email,password,checkbox)
   }
   
    
    return (   
        <> 
           <div className='headertype'>
                <h3>
                    LOGO
                </h3>
                <h1>Welcome Back TO ZUMRA! </h1>
                <h4>Please Fill The credential To Login</h4>
                </div>
            <div className='login-contaner'>
                
                <div className='box-left'>
                    <form className='alltext' onSubmit={handleLogin}>
                
            

                <div className='logcss'>
        
                            <div className="buttons">
              <TextField  fullWidth  label="Full Name" variant="outlined"sx={{marginBottom:"15px"}} type='Full Name' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <TextField  fullWidth  label="Phone Number" variant="outlined"sx={{marginBottom:"15px"}} type='Phoen Number' value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <TextField  fullWidth  label="Email" variant="outlined"sx={{marginBottom:"15px"}} type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <TextField fullWidth type="password" value={password} sx={{marginBottom:"15px"}} onChange={(e)=>setPassword(e.target.value)}  label="password" variant="outlined"  />
               <TextField  fullWidth  label="Confirm Password" variant="outlined"sx={{marginBottom:"15px"}} type='Confirm Password' value={email} onChange={(e)=>setEmail(e.target.value)}/>                  
                    
            <Link to="/Resendemail">
           <button type='submit' disabled={!email || !password}>sign in</button>
                 
                </Link>
            </div>
                           
                            
                            <div className='Signup1'>
                                Don't have an account?
                            <Link to="/" className='Signup' >
                               Login
                            </Link></div>
                </div>
            </form></div>
            <div className='image-right'>
           <div className='image-box'>
                     <InsertPhotoIcon sx={{fontSize:"290px"}} />
              </div>
                </div>
                </div>
        </>
    )
}