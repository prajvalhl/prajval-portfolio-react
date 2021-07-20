import React from "react";
import { useTheme } from "../theme-context";

export function Footer() {
  const { themePalette } = useTheme();
  return (
    <footer className={`footer ${themePalette.primary}`}>
      <div className="footer-header">Connect me on Social Media.</div>
      <ul className="social-links list-non-bullet">
        <li className="list-item-inline">
          <a
            className="link"
            href="https://www.linkedin.com/in/hlprajval/"
            target="_blank"
          >
            Linkedin
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            href="https://github.com/prajvalhl"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            href="https://twitter.com/l_prajval"
            target="_blank"
          >
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
}
