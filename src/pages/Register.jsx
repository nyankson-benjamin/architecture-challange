import React from "react";
import PictureComponent from "../components/PictureComponent";
import Pic1 from "../assets/Pic1.png";
import {
  componentContainer,
  whiteBackground,
  formStyle,
} from "../styles/styles";
import TopBar from "../components/TopBar";
import { formInputs } from "../constants/RegisterFormInputs";
import BlueButton from "../components/Buttons/BlueButton";
import GoogleButton from "../components/Buttons/GoogleButton";

export default function Register() {
  return (
    <div style={componentContainer}>
      <PictureComponent picture={Pic1} />
      <div style={whiteBackground}>
        <TopBar text1="Step 1" text2="Exit" />
        <div style={formStyle("303px")}>
          <h3 style={formStyle().h3}>Create Account</h3>
          <form action="">
            {formInputs.map((input, idx) => (
              <div
                style={{ display: "flex", flexDirection: "column" }}
                key={idx}
              >
                <label htmlFor={input.id}>{input.label}</label>
                <input
                  style={formStyle().inputs}
                  type={input.type}
                  placeholder={input.placeHolder}
                  name={input.name}
                  id={input.id}
                />
              </div>
            ))}
          </form>
          <BlueButton width="334px" text="Create Account" route="addPhoto" />
          <GoogleButton />
        </div>
      </div>
    </div>
  );
}
