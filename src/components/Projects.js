import React, { useEffect } from "react";
import logo from "./images/hero-projects.svg";
import { data } from "../data";
import { useTheme } from "../theme-context";

export function Projects() {
  const { themePalette } = useTheme();

  useEffect(() => {
    document.title = "Projects | Prajval";
  }, []);

  return (
    <div className="projects">
      <header className="hero">
        <img className="hero-img" src={logo} alt="" />
        <h1 className="hero-heading">
          My <span className={themePalette.primaryInside}>Projects</span>
        </h1>
      </header>
      <ul className="list-non-bullet">
        {data.map((proj) => (
          <li key={proj.id}>
            <div
              className={`container container-center article-space ${themePalette.section}`}
            >
              <h1>{proj.title}</h1>
              <small>{proj.date}</small>
              <p>{proj.description}</p>

              <a
                className={`link link-primary link-project ${themePalette.primary}`}
                href={proj.hosted}
                target="_blank"
                rel="noreferrer"
              >
                Live Project
              </a>
              <a
                className="link link-secondary link-project"
                href={proj.source}
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </div>
          </li>
        ))}
      </ul>
      <button
        className={`btn-float float-fix ${themePalette.primary}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <span className="material-icons">arrow_circle_up</span>
      </button>
    </div>
  );
}
