import "./MainAbout.css";
import hole from "../pictures/hole.png";
import inhole from "../pictures/inhole.png";
import data from "../Json/Data.json";
import React, { useState, useEffect } from "react";
var aboutText = "text not found 404";
var titleAbout = "text not found 404";
var menuAboutText = "text not found 404";
var languages;
if (localStorage.hasOwnProperty("language")) {
  if (localStorage.getItem("language") == "polish") {
    languages = "pl";
  } else if (localStorage.getItem("language") == "british") {
    languages = "bg";
  }
} else {
  languages = "pl";
}
if (languages == "pl") {
  aboutText = data.aboutTextPl;
  titleAbout = data.titleAboutPl;
  menuAboutText = data.menuAboutTextPl;
} else {
  aboutText = data.aboutTextEN;
  titleAbout = data.titleAboutEn;
  menuAboutText = data.menuAboutTextEn;
}

window.addEventListener("scroll", () => {
  var sy = document.documentElement.scrollTop;
  console.log(sy);
  var inholeMove = document.querySelector(".inhole");
  inholeMove.style.setProperty("transform", "rotateZ(" + sy / 20 + "deg)");
});

function MainAbout() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);

      if (localStorage.hasOwnProperty("language")) {
        if (localStorage.getItem("language") == "polish") {
          languages = "pl";
        } else if (localStorage.getItem("language") == "british") {
          languages = "bg";
        }
      } else {
        languages = "pl";
      }
      if (languages == "pl") {
        aboutText = data.aboutTextPl;
        titleAbout = data.titleAboutPl;
        menuAboutText = data.menuAboutTextPl;
      } else {
        aboutText = data.aboutTextEN;
        titleAbout = data.titleAboutEn;
        menuAboutText = data.menuAboutTextEn;
      }
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <div className="MainAbout">
      <div className="about">{aboutText}</div>
      <div className="Paralax-hole">
        <img src={hole} className="hole" alt="dziura" />
        <img src={inhole} className="inhole" alt="srodek dziury" />
      </div>
      <div className="tekst-about">
        <div className="title-about">{titleAbout}</div>
        <div className="menu-about-text">{menuAboutText}</div>
      </div>
    </div>
  );
}
export default MainAbout;
