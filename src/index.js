import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NavProvider } from "./nav-context";
import { ThemeProvider } from "./theme-context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
