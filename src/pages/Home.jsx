import BlueButton from "../components/Buttons/BlueButton";
import Pic1 from "../assets/Pic1.png";
import Pic2 from "../assets/Pic2.png";
import Pic3 from "../assets/Pic3.png";
import Pic4 from "../assets/Pic4.png";
import Pic5 from "../assets/Pic5.png";
import Pic6 from "../assets/Pic5.png";

export default function Home() {
  const pictures = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];

  return (
    <div
      style={{
        width: "50%",
        margin: "10px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: "2px solid grey",
        padding: "20px",
        borderRadius: 10,
        // boxShadow: "0px 0px 2px blue",
      }}
    >
      <div>
        <h3 style={{ flexWrap: "no-wrap", textAlign: "center" }}>
          WELCOME TO THE HOME PAGE
        </h3>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr ",
          gridGap: "20px",
          marginBottom: "20px",
        }}
      >
        {pictures.map((picture, index) => (
          <img
            src={picture}
            alt=""
            key={index}
            style={{
              width: "100%",
              // border: "3px solid grey",
              borderRadius: 10,

              background:
                index === 0
                  ? "blue"
                  : index === 1
                  ? "orange"
                  : index === 2
                  ? "yellow"
                  : index === 3
                  ? "lime"
                  : "black",
            }}
          />
        ))}
      </div>
      <BlueButton width="65%" text="Register" route="register" />
    </div>
  );
}
