import React from "react";
import PictureComponent from "../components/PictureComponent";
import Pic2 from "../assets/Pic2.png";
import {
  componentContainer,
  whiteBackground,
  formStyle,
  Vector,
} from "../styles/styles";
import TopBar from "../components/TopBar";
import BlueButton from "../components/Buttons/BlueButton";

export default function AddPhoto() {
  return (
    <div style={componentContainer}>
      <PictureComponent picture={Pic2} />
      <div style={whiteBackground}>
        <TopBar
          text1="Back"
          text2="Step 2"
          text3="Exit"
          route="register"
        />
        <div style={formStyle("367px")}>
          <h3 style={formStyle().h3}>Add Photo</h3>
          <p style={formStyle().p}>
            Add a photo so other members know who you are
          </p>

          <div style={Vector}>
            <div style={Vector.person.head}></div>
            <div style={Vector.person.body}></div>
          </div>

          <BlueButton width="232px" text="Upload a photo" route="addPhoto2" />
        </div>
      </div>
    </div>
  );
}
