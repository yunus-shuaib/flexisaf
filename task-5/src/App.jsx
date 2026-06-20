import { useState, useEffect, useRef } from "react";
import "./App.css";

export default function OTPGenerator() {
  const [OTP, setOTP] = useState();
  const [countdown, setCountdown] = useState();
 
 // const paragraphRef = useRef(null);
  const btnRef = useRef(null);
  
  function handleClick(e) {
    e.preventDefault();
   // setClicked(true)
    let newOTP = "";
    for(let i=0; i<6; i++) {
      newOTP = newOTP + `${Math.floor(Math.random() * 10)}`;
    }
   setCountdown(5);
   setOTP(newOTP);
   //setStartTime(new Date().getSeconds())
   btnRef.current.disabled = true;
  }
  //const btnRef = useRef(null);
  useEffect(()=> {
    if(OTP) {
    const timeoutId = setTimeout(
     () =>{
       btnRef.current.disabled = false;
     }, 5000 )
     return ()=> clearTimeout(timeoutId)
    }
  }, [OTP]);
  
 useEffect(()=> {
    const timeoutId = setTimeout(
     ()=>{
   if(countdown >= 1) {
      setCountdown(countdown -1);
  } 
     }, 1000)
   return ()=>clearTimeout(timeoutId)
 }, [countdown, OTP])
  return <>
  <div className="container">
  <h1 id="otp-title">OTP Generator</h1>
  <h2 id="otp-display">{!OTP ? "Click 'Generate OTP' to get a code" : OTP}</h2>
  <p id="otp-timer" aria-live="polite">{
 countdown >= 1 ?
      `Expires in: ${countdown} seconds` : countdown == 0 && "OTP expired. Click the button to generate a new OTP."
  }</p>
  <button id="generate-otp-button" ref={btnRef} onClick={handleClick}>Generate OTP</button>
  </div>
  
  </>
};