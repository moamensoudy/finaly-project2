import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import "./OTPcss.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OTP() {
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (otp.includes("")) {
      alert("Please enter full OTP");
      return;
    }

    console.log("OTP Code:", otp.join(""));
  };

  return (
    <>
      <div className="contaner1">
        <div className="headertype1">
          <h3>LOGO</h3>
          <h1>Welcome TO ZUMRA!</h1>
          <h4>Please Reset your password</h4>
        </div>

        <div className="login-contaner1">
          <div className="box-left1">
            <form className="alltext1" onSubmit={handleLogin}>
              <div className="logcss1 buttons">
                <div className="header">
                  <p>Please Enter 5 Digit Code Sent To</p>
                  <h3>example@123.gmail.com</h3>
                </div>

            
                <div className="otp-container">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) =>
                        handleChange(e.target.value, index)
                      }
                      onKeyDown={(e) =>
                        handleBackspace(e, index)
                      }
                      className="otp-input"
                    />
                  ))}
                </div>
                <Link to="/Resetpassword">
                  <button type="submit">Verify</button>
                  </Link>
              </div>

              <div className="Signup3">
                Don't have an account?
                <Link to="/Signup" className="Signup2">
                  signup
                </Link>
              </div>
            </form>
          </div>

          <div className="image-right1">
            <div className="image-box">
              <InsertPhotoIcon
                sx={{ fontSize: "280px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}