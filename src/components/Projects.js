import React, { useEffect } from "react";
import logo from "./images/hero-projects.svg";
import { data } from "../projects-data";

export function Projects() {
  useEffect(() => {
    document.title = "Prajval | Projects";
  }, []);
  return (
    <div>
      <header class="hero">
        <img class="hero-img" src={logo} alt="" />
        <h1 class="hero-heading">
          My <span class="primary-color">Projects</span>
        </h1>
      </header>
      <ul class="list-non-bullet">
        {data.map((proj) => (
          <li>
            <div class="container container-center article-space">
              <h1>{proj.title}</h1>
              <small>{proj.date}</small>
              <p>{proj.description}</p>

              <a class="link link-primary" href={proj.hosted} target="_blank">
                Live Project
              </a>
              <a class="link link-secondary" href={proj.source} target="_blank">
                View Source
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
