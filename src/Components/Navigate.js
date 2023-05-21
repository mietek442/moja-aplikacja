import "./Navigate.css";
import polandFlag from "../pictures/poland.png";
import britishFlag from "../pictures/british.png";
import React, { useState, useEffect } from "react";
import dataNavigate from "../Json/dataNavigate.json";
// chang language a navigate menu
var About = "404 not";
var Oferts = "404 not";
var Help = "404 not";
var Profits = "404 not";
var Contact = "404 not";
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
  // aboutText = data.aboutTextPl;
  About = dataNavigate.aboutPl;
  Oferts = dataNavigate.OfertsPl;
  Help = dataNavigate.HelpPl;
  Profits = dataNavigate.ProfitsPl;
  Contact = dataNavigate.ContactPl;
} else {
  About = dataNavigate.aboutEn;
  Oferts = dataNavigate.OfertsEn;
  Help = dataNavigate.HelpEn;
  Profits = dataNavigate.ProfitsEn;
  Contact = dataNavigate.ContactEn;
}

var lastPoint = document.querySelector("#one");
var isTarger = false;
function MoveTo(e) {
  isTarger = true;

  console.log(lastPoint);
  lastPoint = e.target;

  var objects = document.querySelector(".Under-Line");
  console.log("adam");

  var cord = lastPoint.getBoundingClientRect();
  console.log(cord.left);
  objects.style.setProperty("transition", "1s");

  objects.style.setProperty("left", +cord.left + "px");
}
function changesize() {
  if (isTarger === false) {
    var lastPoints = document.querySelector("#one");
  } else {
    lastPoints = lastPoint;
  }
  var objects = document.querySelector(".Under-Line");
  objects.style.setProperty(
    "left",
    +lastPoints.getBoundingClientRect().left + "px"
  );
}
window.addEventListener("load", changesize);
window.addEventListener("resize", changesize);

// sekcja z burgerem
var toggle = document.querySelector(".toggle");

// SEKCJA Z JĘZYKIEM NA STRONIE
function ChangeToBritish() {
  localStorage.setItem("language", "british");

  console.log("change to brithis");
}
function ChangeToPolish() {
  localStorage.setItem("language", "polish");
}
var checked = false;
function MenuSelect() {
  var menuSelectTab = document.querySelectorAll(".Menu-select");
  console.log("pobralo");
  if (checked == false) {
    menuSelectTab.forEach((e) => {
      console.log(e);
      e.style.setProperty("display", "block");
    });
    checked = true;
  } else {
    menuSelectTab.forEach((e) => {
      console.log(e);
      e.style.setProperty("display", "none");
    });
    checked = false;
  }
}

function Navigate() {
  var menuAboutText = "text not found 404";
  var languages;
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
        // aboutText = data.aboutTextPl;
        About = dataNavigate.aboutPl;
        Oferts = dataNavigate.OfertsPl;
        Help = dataNavigate.HelpPl;
        Profits = dataNavigate.ProfitsPl;
        Contact = dataNavigate.ContactPl;
      } else {
        About = dataNavigate.aboutEn;
        Oferts = dataNavigate.OfertsEn;
        Help = dataNavigate.HelpEn;
        Profits = dataNavigate.ProfitsEn;
        Contact = dataNavigate.ContactEn;
      }
    }, 100);
    return () => clearInterval(interval);
  });

  return (
    <div className="navigate">
      <div className="Flex-row-menu">
        <div className="changeLaguage">
          <div className="poland-div" onClick={ChangeToPolish}>
            <img src={polandFlag} />
          </div>
          <div className="british-div" onClick={ChangeToBritish}>
            <img src={britishFlag} />
          </div>
          <input type="checkbox" className="toggle" onClick={MenuSelect} />
          <div className="burger-menu">
            <div className="first-point">
              <div className="short-line-toRight"></div>
            </div>
            <div className="second-point">
              <div className="short-line-toLeft"></div>
            </div>
            <div className="third-point">
              <div className="short-line-toLeft"></div>
            </div>
            <div className="fourth-point">
              <div className="short-line-toRight"></div>
            </div>
            <div className="long-line"></div>
          </div>
        </div>

        <div className="Menu-select" id="one" onClick={MoveTo}>
          {About}
        </div>
        <div className="Menu-select" id="two" onClick={MoveTo}>
          {Oferts}
        </div>
        <div className="Menu-select" id="three" onClick={MoveTo}>
          {Help}
        </div>
        <div className="Menu-select" id="four" onClick={MoveTo}>
          {Profits}
        </div>
        <div className="Menu-select" id="five" onClick={MoveTo}>
          {Contact}
        </div>
        <div className="Under-Line">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}
export default Navigate;
