import React, { useEffect } from "react";
import logo from "./images/hero-projects.svg";
import { data } from "../projects-data";
import { useTheme } from "../theme-context";

export function Projects() {
  const { themePalette } = useTheme();

  useEffect(() => {
    document.title = "Projects | Prajval";
  }, []);

  return (
    <div className={themePalette.body}>
      <header className="hero">
        <img className="hero-img" src={logo} alt="" />
        <h1 className="hero-heading">
          My <span className={themePalette.primaryInside}>Projects</span>
        </h1>
      </header>
      <ul className="list-non-bullet">
        {data.map((proj) => (
          <li key={proj.id}>
            <div className="container container-center article-space">
              <h1>{proj.title}</h1>
              <small>{proj.date}</small>
              <p>{proj.description}</p>

              <a
                className={`link link-primary ${themePalette.primary}`}
                href={proj.hosted}
                target="_blank"
                rel="noreferrer"
              >
                Let's Visit
              </a>
              <a
                className="link link-secondary"
                href={proj.source}
                target="_blank"
                rel="noreferrer"
              >
                View Source Code
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
