import React from "react";
import LogoGear from "../../images/gear8.png";
import Classes from "./Logo.module.css";
const Logo = ({ animationLogoRed, animationLogoGreen }) => {
  return (
    <div className={Classes.logo}>
      <div className={Classes.to__wrap}>
        <h2>T</h2>
        <img className={Classes.Togear} src={LogoGear} alt="" />
        <span
          className={`${Classes.Togear__center} ${
            animationLogoRed ? Classes.red : " "
          }${animationLogoGreen ? Classes.green : " "} `}
        ></span>
      </div>
      <div className={Classes.do__wrap}>
        <h2>D</h2>
        <img className={Classes.Dogear} src={LogoGear} alt="" />
        <span
          className={`${Classes.Dogear__center} ${
            animationLogoRed ? Classes.red : " "
          }${animationLogoGreen ? Classes.green : " "} `}
        ></span>
      </div>
    </div>
  );
};

export default Logo;
