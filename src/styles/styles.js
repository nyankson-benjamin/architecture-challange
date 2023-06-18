export const PictureComponentStyle = (image) => {
    return {
      width: "50%",
      height: "100vh",
      background: `url(${image})`,
      // transform: "matrix(-1, 0, 0, 1, 0, 0)",
      position: "absolute",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      marginTop: 9,
    };
  };
  
  export const PictureContainer = {
    width: "100%",
    height: "100vh",
    background: "#0267FF",
  };
  
  export const elipsis = {
    elipse1: {
      width: "208px",
      height: "208px",
      background: "#DF9BE0",
      opacity: 0.3,
      borderRadius: "100%",
      position: "absolute",
    },
    elipse2: {
      width: "104px",
      height: "104px",
      background: "#D9D9D9",
      opacity: 0.3,
      borderRadius: "100%",
      position: "absolute",
      left: "596px",
      top: "433px",
    },
  
    elipse3: {
      width: "104px",
      height: "104px",
      background: "#DF9BE0",
      opacity: 0.3,
      borderRadius: "100%",
      position: "absolute",
      left: "432px",
      top: "104px",
    },
  };
  
  export const componentContainer = {
    width: "100%",
    height: "769px",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    // border: "1px solid black",
  };
  
  export const whiteBackground = {
    width: "100%",
    height: "769px",
    background: "white",
    //   margin: "0px",
    display: "flex",
    flexDirection: "column",
  };
  
  export const topBarStyle = {
    width: "609px",
    height: "19px",
    margin: " 56px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textStyle: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 600,
    },
  };
  
  export const formStyle = (width) => {
    return {
      width: width,
      // height:'500px',
      margin: "-5px auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  
      inputs: {
        width: "300px",
        borderRadius: "4px",
        border: "1px solid #999999",
        padding: "8px 16px",
        color: "#A6A6A6",
        fontWeight: 400,
        fontSize: "16px",
        fontFamily: "Roboto",
        marginTop: "10px",
        marginBottom: "10px",
      },
  
      h3: {
        color: "#1D2939",
        fontFamily: "Roboto",
        fontSize: "33.18px",
        fontWeight: 700,
        textAlign: "center",
        lineHeight: "40.16px",
      },
  
      p: {
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: 400,
        textAlign: "center",
        color: "#808080",
        marginTop: "-20px",
        width: "300px",
      },
    };
  };
  
  export const BlueButtonStyle = (width) => {
    return {
      background: "#0267FF",
      minWidth: width,
      height: "40px",
      color: "white",
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: "16px",
      border: "none",
      borderRadius: "4px",
      marginTop: "20px",
    };
  };
  
  export const GoogleButtonStyle = {
    display: "flex",
    width: "270px",
    border: "1px solid #999999",
    height: "40px",
    borderRadius: "4px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "24.5px",
    padding: "0.5px 31.5px",
    image: { width: "24px", height: "23.93px" },
  
    text: { color: "#1D2939", fontSize: "16px", marginLeft: "16px" },
  };
  
  export const Vector = {
    width: "139px",
    height: "139px",
    borderRadius: "100%",
    background: "grey",
    opacity: 0.4,
    marginBottom: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    img: {
      width: "170px",
      height: "170px",
      borderRadius: "100%",
      marginBottom: "169px",
    },
  
    person: {
      head: {
        width: "50px",
        height: "50px",
        background: "white",
        borderRadius: "100%",
      },
  
      body: {
        width: "80px",
        background: "white",
        height: "30px",
        marginTop: "10px",
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%",
      },
    },
  };
  
  export const interestButtonStyle = (idx) => {
    return {
      width: "280px",
      borderRadius: "100px",
      border: idx === 0 ? "none" : ' border: "1px solid #999999"',
      padding: "10px",
      margin: "24px auto",
      background: idx === 0 ? "#0267FF" : "white",
      fontSize: "16px",
      color: idx === 0 ? "white" : "#1D2939",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: 400,
    };
  };
  
  export const interestItemsStyle = (idx) => {
    return {
      width: "172px",
      height: "168px",
      background:
        idx === 0
          ? "#F2D7F3"
          : idx === 1
          ? "#EBFFEB"
          : idx === 2
          ? "#FFE7D6"
          : "#D3E3F6",
      // opacity: 0.8,
      borderRadius: "8px",
    };
  };
  
  export const interestHeaderStyle = {
    p: {
      color: "#1D2939",
      fontWeight: 600,
      fontSize: "23.04px",
      marginTop: "20px",
      marginLeft: "24px",
    },
  
    button: (text) => {
      return {
        height: "40px",
        width: text === "Gaming" ? "115px" : "73px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "4px",
        marginLeft: "24px",
        background: "none",
      };
    },
  };
  