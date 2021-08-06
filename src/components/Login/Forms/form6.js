import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import icon from "../../../static/images/ic-phone.png";

const Form6 = ({ onChange, number, onNext }) => {
  // const[number,setNumber]=useState('');

  // const inputEvent=(event)=>{
  //   handleChange(event.target.value);
  //   setNumber(event.target.value);
  //   // event.target.value='';
  // };

  // const onSubmits=(event)=>{
  //   // event.preventDefault();
  //   //  alert('form submitted');

  // };
  return (
    <>
      <main>
        <div id="rightDiv">
          <h1> Rahul</h1>
          {/* <br /> */}
          <p>Enabling Scientific logistics</p>
        </div>
        <div id="leftDiv">
          <form onSubmit="">
            <h3>Continue with Phone</h3>
            {/* <br /> */}
            <p>
              We will send you <span id="bolds">One time Password</span> on this
              number
            </p>
            <label>Phone number</label>
            <br />
            <div className="PhoneDetail">
              {/* <i Class="fas fa-phone-alt design"></i> */}
              <img src={icon} />
              {/* <div></div> */}
              <input
                type="number"
                onChange={onChange}
                placeholder="Enter Your Registered Phone Number"
                id="inputNum"
                value={number}
                required
                autoComplete="off"
              />
            </div>
            <Button onNext={onNext} Text="SEND OTP" />
            <br />
            <span>Don't have an account?</span>
            <button id="signUp">Sign up here</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Form6;
