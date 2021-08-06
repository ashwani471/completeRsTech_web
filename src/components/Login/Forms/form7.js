import React from "react";
// import '../index.css;
import "../../../static/css/style.css";
import Button from "./button";

const Form7 = ({ number, onNext }) => {
  return (
    <>
      <main>
        <div id="rightDiv">
          <h1> Rahul</h1>
          {/* <br /> */}
          <p>Enabling Scientific logistics</p>
        </div>
        <div id="leftDiv">
          <h1>Varify Mobile Number </h1>
          <p>
            We sent Verification Code to &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
            <span className="number">{number}</span>
            <a href="">Edit</a>
          </p>
          <p> Enter the code in below boxes</p>
          <ul id="boxes">
            <li className="box">
              <input className="handleinput" />
            </li>
            <li className="box">
              <input className="handleinput" />
            </li>
            <li className="box">
              <input className="handleinput" />
            </li>
            <li className="box">
              <input className="handleinput" />
            </li>
            <li className="box">
              <input className="handleinput" />
            </li>
            <li className="box">
              <input className="handleinput" />
            </li>
          </ul>
          <Button Text="Verify and Procced" onNext={onNext} />
          <br />
          <span>Don't received code?</span>
          <button id="signUp">Resend code</button>
        </div>
        {/* <div>Don't received code?<span></span></div> */}
      </main>
    </>
  );
};

export default Form7;
