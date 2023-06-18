import React from "react";
import PictureComponent from "../components/PictureComponent";
import Pic4 from "../assets/Pic4.png";
import Interests from "../components/Interests";
import {
  componentContainer,
  whiteBackground,
  formStyle,
} from "../styles/styles";
import TopBar from "../components/TopBar";
import BlueButton from "../components/Buttons/BlueButton";

export default function InterestPageTwo() {
  return (
    <div style={componentContainer}>
      <PictureComponent picture={Pic4} />
      <div style={whiteBackground}>
        <TopBar
          text1="Back"
          text2="Step 4"
          text3="Exit"
          route="interestPage1"
        />
        <div style={formStyle('400px')}>
          <h3 style={formStyle().h3}>
            Let's get started by picking some interest
          </h3>
          <p style={formStyle().p}>
            Alright, let's pic something we're interested in and get started!
          </p>
          <Interests />
          <BlueButton width="360px" text="Continue" route="lastPage" />
        </div>
      </div>
    </div>
  );
}
