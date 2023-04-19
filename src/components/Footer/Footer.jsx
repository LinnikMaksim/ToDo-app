import React from "react";
import Classes from "./Footer.module.css";
import git from "../../images/github.png";
import web from "../../images/web.png";
import sunLight from "../../images/sun (2).png";
import sunBlack from "../../images/sun (3).png";
export const Footer = ({ lightTheme, setLightTheme, colorHeaderFooter }) => {
  return (
    <footer
      className={Classes.footer}
      style={lightTheme ? colorHeaderFooter : null}
    >
      <div className={Classes.wrap__theme}>
        <label className={Classes.label} htmlFor="btn">
          Theme
        </label>
        <button
          className={Classes.btn}
          id="btn"
          onClick={() => setLightTheme((prev) => !prev)}
        >
          <img
            className={Classes.theme}
            src={lightTheme ? sunBlack : sunLight}
            alt=""
          />
        </button>
      </div>
      <div className={Classes.wrap}>
        <a href="https://github.com/LinnikMaksim">
          <img className={Classes.git} src={git} alt="Git" />
        </a>
        <a href="https://github.com/LinnikMaksim">
          <img className={Classes.web} src={web} alt="web" />
        </a>
      </div>
    </footer>
  );
};
