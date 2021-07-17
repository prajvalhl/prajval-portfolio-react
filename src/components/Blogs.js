import React, { useEffect } from "react";
import logo from "./images/hero-blog.svg";

export function Blogs() {
  useEffect(() => {
    document.title = "Prajval | Blogs";
  }, []);
  return (
    <div>
      <header className="hero">
        <img className="hero-img" src={logo} alt="" />
        <h1 className="hero-heading">
          My <span className="primary-color">Blogs</span>
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
