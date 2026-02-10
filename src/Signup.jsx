import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TextField from '@mui/material/TextField';
import "./Signup.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
     const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [FullName, setFullName] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    
     
    function handleLogin(e) {
        e.preventDefault();
        if (!email || !password || !FullName || !PhoneNumber || !ConfirmPassword) {
            alert("please fill all fields")
            return;
        }
       console.log(email,password,FullName,PhoneNumber,ConfirmPassword)
   }
   
    
    return (   
        <> 
           <div className='headertype40'>
                <h3>
                    LOGO
                </h3>
                <h1>Welcome Back TO ZUMRA! </h1>
                <h4>Please Fill The credential To Login</h4>
                </div>
            <div className='login-contaner40'>
                
                <div className='box-left40'>
                    <form className='alltext40' onSubmit={handleLogin}>
                
            

                <div className='logcss40'>
        
                            <div className="buttons40">
              <TextField  fullWidth  label="Full Name" variant="outlined"sx={{marginBottom:"15px"}} type='Full Name' value={FullName} onChange={(e)=>setFullName(e.target.value)}/>
            <TextField  fullWidth  label="Phone Number" variant="outlined"sx={{marginBottom:"15px"}} type='Phoen Number' value={PhoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
             <TextField  fullWidth  label="Email" variant="outlined"sx={{marginBottom:"15px"}} type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
             <TextField fullWidth type="password" value={password} sx={{marginBottom:"15px"}} onChange={(e)=>setPassword(e.target.value)}  label="password" variant="outlined"  />
               <TextField  fullWidth  label="Confirm Password" variant="outlined"sx={{marginBottom:"15px"}} type='Confirm Password' value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>                  
                    
            <Link to="/Resendemail">
           <button type='submit' disabled={!email || !password || !FullName || !PhoneNumber || !ConfirmPassword}>sign in</button>
                 
                </Link>
            </div>
                           
                            
                            <div className='Signup40'>
                                Don't have an account?
                            <Link to="/" className='Signup40' >
                               Login
                            </Link></div>
                </div>
            </form></div>
            <div className='image-right40'>
           <div className='image-box40'>
                     <InsertPhotoIcon sx={{fontSize:"290px"}} />
              </div>
                </div>
                </div>
        </>
    )
}