import React from "react";
import { VscGithubAlt } from "react-icons/vsc";


function Footer() {
  return (
    <footer>
      <p>
        <ul>
          <a href="https://github.com/Mer2022">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
