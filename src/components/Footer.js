import React from "react";
import { useTheme } from "../theme-context";

export function Footer() {
  const { themePalette } = useTheme();
  return (
    <footer className={`footer ${themePalette.primary}`}>
      <div className="footer-header">Connect with me on</div>
      <ul className="social-links list-non-bullet">
        <li className="list-item-inline">
          <a
            className="link"
            href="https://github.com/prajvalhl"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            href="https://www.linkedin.com/in/hlprajval/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>

        <li className="list-item-inline">
          <a
            className="link"
            href="https://twitter.com/l_prajval"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
      <p>
        Made with <span>&lt;/&gt;</span> by Prajval H L
      </p>
    </footer>
  );
}
