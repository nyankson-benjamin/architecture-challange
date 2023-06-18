import React from "react";
import GoogleLogo from "../../assets/GoogleLogo.png";
import { GoogleButtonStyle } from "../../styles/styles";

function GoogleButton() {
  return (
    <div style={GoogleButtonStyle}>
      <img src={GoogleLogo} alt="" style={GoogleButtonStyle.image} />
      {/* <div style={GoogleButtonStyle.textContainer}> */}
      <p style={GoogleButtonStyle.text}>Sign up with Google</p>
      {/* </div> */}
    </div>
  );
}

export default GoogleButton;
