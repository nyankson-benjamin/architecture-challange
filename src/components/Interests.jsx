import React from "react";
import { interestItemsStyle, interestHeaderStyle } from "../styles/styles";

function Interests() {
  const interests = ["Gaming", "Fashion", "Music", "Reading"];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
        marginBottom: "20px",
      }}
    >
      {interests.map((interest, idx) => (
        <div style={interestItemsStyle(idx)} key={idx}>
          <p style={interestHeaderStyle.p}>{interest}</p>
          <button style={interestHeaderStyle.button(interest)}>
            {interest === "Gaming" ? <span>Added &#x2713;</span> : "Add"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Interests;
