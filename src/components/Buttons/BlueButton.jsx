import { BlueButtonStyle } from "../../styles/styles";
import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";

function BlueButton({ text, width, route }) {
  const { dispatch } = useContext(ComponentContext);

  return (
    <button
      style={BlueButtonStyle(width)}
      onClick={() => dispatch({ type: "navigate", payload: route })}
    >
      {text}
    </button>
  );
}

export default BlueButton;
