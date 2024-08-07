import React, { useState } from "react";
import axios from "axios";
import"../App.css"

function SendOtp() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOtp = async () => {
    localStorage.setItem("phoneNumber", phoneNumber);
    try {
      const response = await axios.post(`http://localhost:5000/send-otp`, {
        phoneNumber,
      });
      console.log(phoneNumber);
      setMessage(response.data);
    } catch (error) {
      console.log(error );
      setMessage("Error sending OTP");
    }
  };

  return (
    <div>
      <h2>Send OTP</h2>
      <div className="App">
        <input
          type="text"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSendOtp}>Send OTP</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default SendOtp;
