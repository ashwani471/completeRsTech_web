import React from 'react';


const Button=({onNext, Text})=>{
    
    return(
        <>
         <button id="sendOtp" 
              type='submit'
              onClick={onNext}>
              {/* SEND OTP */}
              {Text}
             <i Class="fas fa-long-arrow-alt-right" id="rightArrow"></i>
               </button>
  <br />
   </>
    )
};


export default Button;