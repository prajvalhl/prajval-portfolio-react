import React, { useEffect } from "react";
import logo from "./images/hero-main.svg";
import { useNav } from "../nav-context";
import { useTheme } from "../theme-context";

export function Home() {
  const { setRoute } = useNav();
  const { themePalette } = useTheme();

  useEffect(() => {
    document.title = "Prajval | Portfolio";
  }, []);

  return (
    <div className={themePalette.body}>
      <header className="hero">
        <img className="hero-img" src={logo} alt="" />
        <h1 className={`hero-heading ${themePalette.heroHeading}`}>
          Hello! My name is{" "}
          <span className={themePalette.primaryInside}>Prajval H L</span>. I'm a
          Full Stack
          <span className={themePalette.primaryInside}>
            {" "}
            Web Development
          </span>{" "}
          Enthusiast.
        </h1>
      </header>
      <section className={`section ${themePalette.section}`}>
        <div className="container container-center">
          <h1>Technologies</h1>
          <p>
            I'm familiar with HTML5, CSS3, JavaScript, Git, NodeJS, ReactJS, Web
            Hosting, and Python.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container container-center">
          <h1>Projects</h1>
          <p>Here are some of my works!</p>
          <button
            className={`button btn-primary ${themePalette.primary}`}
            onClick={() => setRoute("projects")}
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
            className={`button btn-primary btn-secondary ${themePalette.section} ${themePalette.primaryInside}`}
            onClick={() => setRoute("blog")}
          >
            Read Blogs
          </button>
        </div>
      </section>
    </div>
  );
}
