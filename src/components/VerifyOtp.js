import React, { useState, useEffect } from "react";
import axios from "axios";

function VerifyOtp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Retrieve phone number from session storage
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount
  console.log(phoneNumber);

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:5000/verify-otp", {
        phoneNumber,
        otp,
      });
      setMessage(response.data);
    } catch (error) {
      setMessage("Error verifying OTP");
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <div className="App">
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={handleVerifyOtp}>Verify OTP</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default VerifyOtp;
