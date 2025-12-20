import { createContext } from "react";
export const AppContext = createContext();

export function AppProvider({ children }) {
  const data = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
