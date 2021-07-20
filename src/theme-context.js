import { createContext, useContext, useState } from "react";

export const Theme = createContext();

export const dark = {
  body: "dark-body",
  section: "dark-section",
  primary: "dark-primary",
  primaryInside: "dark-color-in",
  heroHeading: null,
};
export const light = {
  body: "light-body",
  section: "light-section",
  primary: "light-primary",
  primaryInside: "light-color-in",
  heroHeading: "light-hero-heading",
};

export function ThemeProvider({ children }) {
  const [themePalette, setTheme] = useState(light);

  return (
    <Theme.Provider value={{ themePalette, setTheme }}>
      {children}
    </Theme.Provider>
  );
}

export function useTheme() {
  return useContext(Theme);
}
