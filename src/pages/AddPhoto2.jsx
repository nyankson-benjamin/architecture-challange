import React from "react";
import PictureComponent from "../components/PictureComponent";
import Pic2 from "../assets/Pic2.png";
import vector from "../assets/Vector.png";
import {
  componentContainer,
  whiteBackground,
  formStyle,
  Vector,
} from "../styles/styles";
import TopBar from "../components/TopBar";
import BlueButton from "../components/Buttons/BlueButton";

export default function AddPhoto2() {
  return (
    <div style={componentContainer}>
      <PictureComponent picture={Pic2} />
      <div style={whiteBackground}>
        <TopBar
          text1="Back"
          text2="Step 2"
          text3="Exit"
          route="addPhoto"
        />
        <div style={formStyle('367px')}>
          <h3 style={formStyle().h3}>Add Photo</h3>
          <p style={formStyle().p}>
            Add a photo so other members know who you are
          </p>

          {/* <div style={Vector}> */}
          <img src={vector} alt="" style={Vector.img} />
          {/* </div> */}

          <BlueButton width="232px" text="Continue" route="interestPage1" />
        </div>
      </div>
    </div>
  );
}
