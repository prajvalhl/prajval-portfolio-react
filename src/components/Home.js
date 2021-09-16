import React, { useEffect } from "react";
import logo from "./images/hero-main.svg";
import { useNav } from "../nav-context";
import { useTheme } from "../theme-context";

export function Home() {
  const { setRoute } = useNav();
  const { themePalette } = useTheme();

  useEffect(() => {
    document.title = "Prajval";
  }, []);

  return (
    <div>
      <header className="hero">
        <img className="hero-img" src={logo} alt="" />
        <h1 className={`hero-heading ${themePalette.heroHeading}`}>
          Hey there! My name is{" "}
          <span className={themePalette.primaryInside}>Prajval</span>. I'm a
          <span className={themePalette.primaryInside}> Full Stack Web</span>{" "}
          Developer.
        </h1>
      </header>
      <section className={`section ${themePalette.section}`}>
        <div className="container container-center section-skills">
          <h1>My Skills</h1>
          <ul className="list-non-bullet">
            <li className="skills">
              <strong>Web:</strong> HTML5, CSS3, JavaScript, ReactJS, NodeJS,
              Python.
            </li>
            <li className="skills">
              <strong>Database:</strong> MS SQL Server, MongoDB.{" "}
            </li>
            <li className="skills">
              <strong>Version Control System:</strong> Git, GitHub.{" "}
            </li>
            <li className="skills">
              <strong>Web Hosting:</strong> Netlify.{" "}
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container container-center">
          <h1>Projects</h1>
          <p>Here are some of my works!</p>
          <button
            className={`button btn-primary ${themePalette.primary}`}
            onClick={() => {
              setRoute("projects");
              window.scrollTo(0, 0);
            }}
          >
            See Projects
          </button>
        </div>
      </section>
      <section className={`section ${themePalette.section}`}>
        <div className="container container-center">
          <h1>Blogs</h1>
          <p>
            I like to document my journey of learning so that it would help
            someone in need.
          </p>
          <button
            className={`button btn-primary btn-secondary ${themePalette.section}`}
            onClick={() => {
              setRoute("blog");
              window.scrollTo(0, 0);
            }}
          >
            Read Blogs
          </button>
        </div>
      </section>
      <section className="section resume">
        <div className="container container-center">
          <h1>Download Resume</h1>
          <p>Have a look at my Resume!</p>
          <a
            className={`link link-primary ${themePalette.primary}`}
            href="https://drive.google.com/file/d/1dHvEPNb_4ySzxvs_kZBZMsfqTssCPtDW/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}
