import React from "react";
import PictureComponent from "../components/PictureComponent";
import Pic3 from "../assets/Pic3.png";
import InterestButton from "../components/Buttons/InterestButton";
import {
  componentContainer,
  whiteBackground,
  formStyle,
} from "../styles/styles";
import TopBar from "../components/TopBar";
import BlueButton from "../components/Buttons/BlueButton";

export default function InterestPageOne() {
  return (
    <div style={componentContainer}>
      <PictureComponent picture={Pic3} changeStyle={true} />
      <div style={whiteBackground}>
        <TopBar
          text1="Back"
          text2="Step 3"
          text3="Exit"
          route="addPhoto2"
        />
        <div style={formStyle()}>
          <h3 style={formStyle().h3}>Hey there! what brings you here?</h3>
          <p style={formStyle().p}>This will help us make great recommendations.</p>
          <InterestButton />
          <BlueButton width="232px" text="Continue" route="interestPage2" />
        </div>
      </div>
    </div>
  );
}
