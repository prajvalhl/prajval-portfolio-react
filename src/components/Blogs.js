import React, { useEffect } from "react";
import logo from "./images/hero-blog.svg";
import { useTheme } from "../theme-context";

export function Blogs() {
  const { themePalette } = useTheme();

  useEffect(() => {
    document.title = "Blogs | Prajval";
  }, []);

  return (
    <div className="blogs">
      <header className="hero">
        <img className="hero-img" src={logo} alt="" />
        <h1 className="hero-heading">
          My <span className={themePalette.primaryInside}>Blogs</span>
        </h1>
      </header>
      <section className="section">
        <div className="container container-center">
          <h1>Nothing Here Yet!</h1>
          <p>
            This page is under construction! I will update this page once my
            blog is up and running!
          </p>
        </div>
      </section>
    </div>
  );
}
