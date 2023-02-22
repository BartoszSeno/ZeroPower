import { useState } from "react";
import { NavLink } from "react-router-dom";

function ProjectList({
  lang,
  projectList,
  projectListDot,
  dotBack,
  setDotBack,
  projectOneDot,
  setprojectOneDot,
  projectTwoDot,
  setprojectTwoDot,
  projectThreeDot,
  setprojectThreeDot,
  dotMarginTop,
  setdotMarginTop,
}: {
  lang: any;
  projectList: any;
  projectListDot: any;
  dotBack: any;
  setDotBack: any;
  projectOneDot: any;
  setprojectOneDot: any;
  projectTwoDot: any;
  setprojectTwoDot: any;
  projectThreeDot: any;
  setprojectThreeDot: any;
  dotMarginTop: any;
  setdotMarginTop: any;
}) {
  setTimeout(() => {
    sqMargin();
  }, 1);

  function sqMargin() {
    setTimeout(() => {
      if (dotBack === false) {
        setdotMarginTop("-30px");
      } else if (projectTwoDot === true) {
        setdotMarginTop("70px");
      } else if (projectThreeDot === true) {
        setdotMarginTop("121px");
      } else if (projectOneDot === true) {
        setdotMarginTop("18px");
      }
    }, 1);
  }

  return (
    <>
      <span
        className="dot"
        style={{
          display: projectListDot ? "block" : "none",
          marginTop: dotMarginTop,
        }}
      ></span>
      <ul className="project-list" style={{ display: projectList }}>
        <li
          className="project-nav"
          onClick={(e) => {
            setprojectOneDot(true);
            setprojectTwoDot(false);
            setprojectThreeDot(false);
            setDotBack(true);
          }}
        >
          <NavLink to="/ProjectOne">{lang.projectone}</NavLink>
        </li>
        <li
          className="project-nav"
          onClick={(e) => {
            setprojectOneDot(false);
            setprojectTwoDot(true);
            setprojectThreeDot(false);
            setDotBack(true);
          }}
        >
          <NavLink to="/ProjectTwo">{lang.projecttwo}</NavLink>
        </li>

        <li
          className="project-nav"
          onClick={(e) => {
            setprojectOneDot(false);
            setprojectTwoDot(false);
            setprojectThreeDot(true);
            setDotBack(true);
          }}
        >
          <NavLink to="/ProjectThree">{lang.projectthree}</NavLink>
        </li>
      </ul>
    </>
  );
}

export default ProjectList;
