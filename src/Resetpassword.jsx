import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TextField from '@mui/material/TextField';
import "./Resetpassword.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Resetpassword() {
     const [password, setPassword] = useState("");
    const [resetpassword, setresetpassword] = useState("");
      
    function handleLogin(e) {
        e.preventDefault();
        if (!resetpassword || !password) {
            alert("please fill all fields")
            return;
        }
       console.log(resetpassword,password)
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
                                
                     <TextField fullWidth type="passwoed" value={password} onChange={(e)=>setPassword(e.target.value)} sx={{marginBottom:"15px"}} label="password" variant="outlined"  />
                    <TextField fullWidth type="confirmpasswoed" value={resetpassword} onChange={(e)=>setresetpassword(e.target.value)}  label="confirmpassword" variant="outlined"  />
                                <Link to="/">
                                    <button type='submit' disabled={!resetpassword || !password}>Resetpassword</button>
                                    </Link>
 
                    </div>
                                        
                            <div className='Signup1'>
                                Don't have an account?
                            <Link to="/Signup" className='Signup' >
                                signup  
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