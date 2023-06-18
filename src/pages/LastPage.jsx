import React from "react";
import PictureComponent from "../components/PictureComponent";

import Pic5 from "../assets/Pic5.png";

import {
  componentContainer,
  whiteBackground,
  formStyle,

} from "../styles/styles";

import BlueButton from "../components/Buttons/BlueButton";
import pict from "../assets/Pic6.png";

export default function LastPage() {
  return (
    <div style={componentContainer}>
      <PictureComponent picture={Pic5} />
      <div style={whiteBackground}>
        <div style={formStyle()}>
          <h3 style={formStyle().h3}>Woohoo!</h3>
          <p style={formStyle().p}>
            Hey there! Your registration is complete, get excited for the
            ultimate quiz experience of your life. Let's do this!
          </p>

          <div style={formStyle("")}>
            <img src={pict} alt="" style={{ height: "441px" }} />
          </div>

          <BlueButton width="360px" text="Continue" />
        </div>
      </div>
    </div>
  );
}
