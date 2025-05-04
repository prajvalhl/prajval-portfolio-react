import React, { useEffect } from "react";
import logo from "./images/hero-main.svg";
import { useTheme } from "../theme-context";
import { Link } from "react-router-dom";

export function Home() {
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
          <span className={themePalette.primaryInside}> Frontend Web</span>{" "}
          Developer.
        </h1>
      </header>
      <section className={`section ${themePalette.section}`}>
        <div className="container container-center section-skills">
          <h1>My Skills</h1>
          <ul className="list-non-bullet">
            <li className="skills">
              <strong>Web:</strong> HTML5, CSS3, JavaScript, Angular, React,
              Vue.
            </li>
            <li className="skills">
              <strong>Backend:</strong> NodeJS, ExpressJS.
            </li>
            <li className="skills">
              <strong>Database:</strong> MongoDB, Mongoose.
            </li>
            <li className="skills">
              <strong>Version Control System:</strong> Git, GitHub.{" "}
            </li>
            <li className="skills">
              <strong>Web Hosting:</strong> Netlify.{" "}
            </li>
            <li className="skills">
              <strong>Others:</strong> Python.{" "}
            </li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container container-center">
          <h1>Projects</h1>
          <p>Here are some of my works!</p>
          <Link
            to="/projects"
            className={`link link-primary ${themePalette.primary}`}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            See Projects
          </Link>
        </div>
      </section>
      <section className={`section ${themePalette.section}`}>
        <div className="container container-center">
          <h1>Blogs</h1>
          <p>
            I like to document my journey of learning so that it would help
            someone in need.
          </p>
          <Link
            to="/blogs"
            className="link link-secondary"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Read Blogs
          </Link>
        </div>
      </section>
      <section className="section resume">
        <div className="container container-center">
          <h1>Download Resume</h1>
          <p>Have a look at my Resume!</p>
          <a
            className={`link link-primary ${themePalette.primary}`}
            href="https://drive.google.com/uc?id=1AY9wxLKSjO5o3FpuYrrcrGCshXmjmJU0&export=download"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}
