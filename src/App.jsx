
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import Forgetpassword from "./Forgetpassword";
import Signup from "./Signup";
import OTP from "./OTP";
import Resetpassword from "./Resetpassword";
export default function App() {
    return (
        <Routes>
           
            <Route path="/OTP" element={<OTP />} />
            <Route path="/Login" element={ <Login />} />
            <Route path="/Forgetpassword" element={<Forgetpassword />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Resetpassword" element={<Resetpassword />} />
             <Route path="/Resetpassword/Login" element={<Resetpassword />} />
       </Routes>
       )
}