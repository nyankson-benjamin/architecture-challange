import React from "react";
import { interestButtonStyle } from "../../styles/styles";

export default function InterestButton() {
  const interests = [
    "Social Interaction",
    "Entertainment Development",
    "Entertainment and Fun",
    "Rewards and Recognition",
  ];
  return (
    <>
      {interests.map((interest, idx) => (
        <button style={interestButtonStyle(idx)} key={idx}>
          <span style={{ fontWeight: 700 }}>+</span>
          <span style={{ marginLeft: "20px", marginRight: "20px" }}>
            {interest}
          </span>
        </button>
      ))}
    </>
  );
}
