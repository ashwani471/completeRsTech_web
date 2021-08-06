import React from 'react';
import Button from './button';

const Form8=({onNext})=>{
    return(
        <main>
        <div id="rightDiv"> 
        <h1> Rahul</h1>
        {/* <br /> */}
        <p>Enabling Scientific logistics</p>
        </div>
        <div id="leftDiv">
        <i className="far fa-check-circle cirTick">
        </i>
        <h1>Congratulation,You're all set!</h1>
        <p>you have successfully Setup Your profile,now start</p>
        <p>Exploring the application</p>
        <Button 
            Text="Continue to the dashboard"
            onNext={onNext}
        />
        </div>
        </main>
    )
}

export default Form8;