import { createContext, useContext, useState } from "react";

const nav = createContext();

export function NavProvider({ children }) {
  const [route, setRoute] = useState("home");
  return <nav.Provider value={{ route, setRoute }}>{children}</nav.Provider>;
}

export function useNav() {
  return useContext(nav);
}
