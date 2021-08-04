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
            href="https://github.com/prajvalhl"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/material-outlined/48/000000/github.png"
              alt="github logo"
            />
          </a>
        </li>
        <li className="list-item-inline">
          <a
            className="link"
            href="https://www.linkedin.com/in/hlprajval/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/50/000000/linkedin.png"
              alt="linkedin logo"
            />
          </a>
        </li>

        <li className="list-item-inline">
          <a
            className="link"
            href="https://twitter.com/l_prajval"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/46/000000/twitter.png"
              alt="twitter logo"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}
