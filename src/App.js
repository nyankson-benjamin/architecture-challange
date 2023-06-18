import Register from "./pages/Register";
import AddPhoto from "./pages/AddPhoto";
import AddPhoto2 from "./pages/AddPhoto2";
import InterestPageOne from "./pages/InterestPageOne";
import InterestPageTwo from "./pages/InterestPageTwo";
import LastPage from "./pages/LastPage";
import Home from "./pages/Home";
import { useContext } from "react";
import { ComponentContext } from "./context/ComponentContext";

function App() {
  const { component } = useContext(ComponentContext);

  let currentCompont;

  switch (component) {
    case "home":
      currentCompont = <Home />;
      break;

    case "register":
      currentCompont = <Register />;
      break;

    case "addPhoto":
      currentCompont = <AddPhoto />;
      break;

    case "addPhoto2":
      currentCompont = <AddPhoto2 />;
      break;

    case "interestPage1":
      currentCompont = <InterestPageOne />;
      break;

    case "interestPage2":
      currentCompont = <InterestPageTwo />;
      break;

    case "lastPage":
      currentCompont = <LastPage />;
      break;

    default:
      currentCompont = <Home />;
  }

  return <>{currentCompont}</>;
}

export default App;
