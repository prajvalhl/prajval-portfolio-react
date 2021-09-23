import React, { useEffect, useState } from "react";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Blogs } from "./Blogs";
import { Footer } from "./Footer";
import { useTheme, light, dark } from "../theme-context";
import { NavLink, Routes, Route } from "react-router-dom";

export function Main() {
  const [isDark, setDark] = useState(false);
  const { themePalette, setTheme } = useTheme();
  const active = { fontWeight: "bold", color: "white", textDecoration: "none" };

  useEffect(() => {
    const getTheme = JSON.parse(localStorage.getItem("theme"));
    if (getTheme) {
      setTheme(getTheme);
      getTheme.body === "dark-body" ? setDark(true) : setDark(false);
    }
  }, [setTheme]);

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
          <NavLink
            to="/"
            className="brand-name"
            activeStyle={active}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            PRAJVAL H L
          </NavLink>
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
            <NavLink
              end
              className="nav-items"
              to="/"
              activeStyle={active}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink
              end
              className="nav-items"
              to="/projects"
              activeStyle={active}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Projects
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink
              end
              className="nav-items"
              to="/blogs"
              activeStyle={active}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}
