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
    if (getTheme) {
      setTheme(getTheme);
      getTheme.body === "dark-body" ? setDark(true) : setDark(false);
    }
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
          <p
            className="brand-name"
            onClick={() => {
              setRoute("home");
              window.scrollTo(0, 0);
            }}
          >
            PRAJVAL H L
          </p>
          <div className="theme-btn-position">
            <input
              type="checkbox"
              className="checkbox"
              id="theme-btn"
              onChange={handleThemeButton}
              checked={isDark}
            />
            <label className="label" htmlFor="theme-btn">
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
              onClick={() => {
                setRoute("home");
                window.scrollTo(0, 0);
              }}
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
              onClick={() => {
                setRoute("projects");
                window.scrollTo(0, 0);
              }}
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
              onClick={() => {
                setRoute("blog");
                window.scrollTo(0, 0);
              }}
            >
              Blogs
            </button>
          </li>
        </ul>
      </nav>
      {route === "home" && <Home />}
      {route === "projects" && <Projects />}
      {route === "blog" && <Blogs />}
      <Footer />
    </div>
  );
}
