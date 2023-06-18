import { createContext, useReducer, useEffect } from "react";
export const ComponentContext = createContext();

const componentReducer = (state, action) => {
  switch (action.type) {
    case "navigate":
      return action.payload;

    default:
      return state;
  }
};
const ComponentContexProvider = ({ children }) => {
  const [component, dispatch] = useReducer(componentReducer, "", () => {
    const localData = localStorage.getItem("currentComponent");

    return localData ? localData : "";
  });

  useEffect(() => {
    localStorage.setItem("currentComponent", component);
  }, [component]);
  return (
    <ComponentContext.Provider value={{ component, dispatch }}>
      {children}
    </ComponentContext.Provider>
  );
};

export default ComponentContexProvider;
