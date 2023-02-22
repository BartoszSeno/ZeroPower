import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home({
  lang,
  closeProjects,
  setHomeHeight,
  setAboutMeHeight,
  setProjectHeight,
  setContactHeight,
  setProjectList,
  setProjectListDot,
}: {
  lang: any;
  closeProjects: any;
  setHomeHeight: any;
  setAboutMeHeight: any;
  setProjectHeight: any;
  setContactHeight: any;
  setProjectList: any;
  setProjectListDot: any;
}) {
  return (
    <>
      <li
        className="li-nav"
        onClick={(e) => {
          closeProjects();
          setHomeHeight(true);
          setAboutMeHeight(false);
          setProjectHeight(false);
          setContactHeight(false);
          setProjectList("none");
          setProjectListDot(false);
        }}
      >
        <NavLink to="/">
          <div className="home-nav">{lang.home}</div>
        </NavLink>
      </li>
    </>
  );
}

export default Home;
