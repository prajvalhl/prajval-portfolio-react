import React, { useEffect } from "react";
import logo from "./images/hero-blog.svg";
import { useTheme } from "../theme-context";
import { blogsData } from "../data";

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
      <ul className="list-non-bullet">
        {blogsData.map((blog) => (
          <li key={blog.id}>
            <div
              className={`container container-center article-space ${themePalette.section}`}
            >
              <h1>{blog.title}</h1>
              <small>{blog.date}</small>
              <p>{blog.description}</p>

              <a
                className={`link link-primary ${themePalette.primary}`}
                href={blog.link}
                target="_blank"
                rel="noreferrer"
              >
                Read more
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
