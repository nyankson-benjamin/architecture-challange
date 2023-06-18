import React from "react";
import {
  PictureComponentStyle,
  PictureContainer,
  elipsis,
} from "../styles/styles";

export default function PictureComponent({ picture, changeStyle }) {
  return (
    <div style={PictureContainer}>
      <div style={elipsis.elipse1}></div>
      <div style={elipsis.elipse2}></div>
      <div style={elipsis.elipse3}></div>
      <div style={PictureComponentStyle(picture)}>
        {changeStyle ? "" : null}
      </div>
    </div>
  );
}
