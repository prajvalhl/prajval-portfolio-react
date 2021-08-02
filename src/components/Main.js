import React, { useEffect, useState } from "react";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Blogs } from "./Blogs";
import { Footer } from "./Footer";
import { useNav } from "../nav-context";
import { useTheme, light, dark } from "../theme-context";

export function Main() {
  const { route, setRoute } = useNav();
  const [isDark, setDark] = useState(false);
  const { themePalette, setTheme } = useTheme();

  useEffect(() => {
    const getTheme = JSON.parse(localStorage.getItem("theme"));
    setTheme(getTheme);
    getTheme.body === "dark-body" ? setDark(true) : setDark(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themePalette));
  }, [themePalette]);

  function handleThemeButton() {
    setTheme(() => (isDark ? light : dark));
    setDark((prev) => !prev);
  }

  return (
    <div>
      <nav className={`container navigation ${themePalette.primary}`}>
        <div className="nav-brand">
          <button
            className={`button brand-name ${themePalette.primary}`}
            onClick={() => setRoute("home")}
          >
            PRAJVAL H L
          </button>
          <div className="theme-position">
            <input
              type="checkbox"
              className="checkbox"
              id="chk"
              onChange={handleThemeButton}
              checked={isDark}
            />
            <label className="label" htmlFor="chk">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <div className="ball"></div>
            </label>
          </div>
        </div>
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <button
              className={
                route === "home"
                  ? `button link-active ${themePalette.primary}`
                  : `button ${themePalette.primary}`
              }
              onClick={() => setRoute("home")}
            >
              Home
            </button>
          </li>
          <li className="list-item-inline">
            <button
              className={
                route === "projects"
                  ? `button link-active ${themePalette.primary}`
                  : `button ${themePalette.primary}`
              }
              onClick={() => setRoute("projects")}
            >
              Projects
            </button>
          </li>
          <li className="list-item-inline">
            <button
              className={
                route === "blog"
                  ? `button link-active ${themePalette.primary}`
                  : `button ${themePalette.primary}`
              }
              onClick={() => setRoute("blog")}
            >
              Blogs
            </button>
          </li>
        </ul>
      </nav>
      {route === "home" && <Home setRoute={setRoute} />}
      {route === "projects" && <Projects />}
      {route === "blog" && <Blogs />}
      <Footer />
    </div>
  );
}
