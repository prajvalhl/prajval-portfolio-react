import React from "react";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Blogs } from "./Blogs";
import { Footer } from "./Footer";
import { useNav } from "../nav-context";

export function Main() {
  const { route, setRoute } = useNav();
  return (
    <div>
      <nav className="container navigation">
        <div className="nav-brand">
          <button
            className="button main-title"
            onClick={() => setRoute("home")}
          >
            PRAJVAL H L
          </button>
        </div>
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <button
              className={route === "home" ? "button link-active" : "button"}
              onClick={() => setRoute("home")}
            >
              Home
            </button>
          </li>
          <li className="list-item-inline">
            <button
              className={route === "projects" ? "button link-active" : "button"}
              onClick={() => setRoute("projects")}
            >
              Projects
            </button>
          </li>
          <li className="list-item-inline">
            <button
              className={route === "blog" ? "button link-active" : "button"}
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
