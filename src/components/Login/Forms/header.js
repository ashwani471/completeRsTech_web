import React from "react";
import Form8 from "./form8";
import icon from "../../../static/images/ic-notification.svg";
import icon1 from "../../../static/images/ic-user.svg";

const header = () => {
  return (
    <>
      <div id="heading">
        <div id="imgDiv">
          <img src="" />
        </div>
        <div id="back">
          <i class="fas fa-chevron-left"></i>
          <span id="bth">Back to Home</span>
        </div>
        {/* <i class="fas fa-bell" id="bell"></i> */}
        <img src={icon} id="bell" />
        <div id="profile">
          <img src={icon1} />
          <span id="myProf">
            My profile<i class="fas fa-chevron-right" id="rightArw"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default header;
