
import { Routes, Route } from "react-router-dom";
import Login from "./Login"
import Forgetpassword from "./Forgetpassword";
import Signup from "./Signup";
export default function App() {
    return (
        <Routes>

            <Route path="/" element={ <Login />} />
            <Route path="/Forgetpassword" element={<Forgetpassword />} />
             <Route path="/Signup" element={<Signup />} />
        </Routes>
       )
}