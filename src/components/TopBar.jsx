import { useContext } from "react";
import { topBarStyle } from "../styles/styles";
import { ComponentContext } from "../context/ComponentContext";

export default function TopBar({ text1, text2, text3, route }) {
  const { dispatch } = useContext(ComponentContext);
  const texts = text3 ? [text1, text2, text3] : [text1, text2];
  return (
    <div style={topBarStyle}>
      {texts.map((text, idx) => (
        <div key={idx}>
          <p
            onClick={
              text === "Exit"
                ? () => dispatch({ type: "navigate", payload: "home" })
                : text === "Back"
                ? () => dispatch({ type: "navigate", payload: route })
                : null
            }
          >
            {text === "Back" ? (
              <span style={topBarStyle.textStyle}>&#129028; {text}</span>
            ) : text[0] === "S" ? (
              <>
                <span style={topBarStyle.textStyle}>{text} </span>
                <span>of 4</span>
              </>
            ) : (
              <span style={topBarStyle.textStyle}>{text}</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
