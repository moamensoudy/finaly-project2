
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import Forgetpassword from "./Forgetpassword";
import Signup from "./Signup";
import OTP from "./OTP";
export default function App() {
    return (
        <Routes>

            <Route path="/" element={ <Login />} />
            <Route path="/Forgetpassword" element={<Forgetpassword />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Forgetpassword/OTP" element={<OTP />} />
        </Routes>
       )
}