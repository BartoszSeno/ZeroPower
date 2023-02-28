import Home from "../Home/Home";
import AboutMe from "../AboutMe/aboutme";
import Project from "../Project/project";
import Contact from "../Contact/contact";

import { useState } from "react";

function MainNav({
  langChange,
  lang,
  setDotBack,
  dotBack,
  projectOneDot,
  setprojectOneDot,
  projectTwoDot,
  setprojectTwoDot,
  projectThreeDot,
  setprojectThreeDot,
  dotMarginTop,
  setdotMarginTop,
  setLangChange,
  setBLOAC,
  BLOAC,
}: {
  langChange: any;
  lang: any;
  setDotBack: any;
  dotBack: any;
  projectOneDot: any;
  setprojectOneDot: any;
  projectTwoDot: any;
  setprojectTwoDot: any;
  projectThreeDot: any;
  setprojectThreeDot: any;
  dotMarginTop: any;
  setdotMarginTop: any;
  setLangChange: any;
  setBLOAC: any;
  BLOAC: any;
}) {
  const [openProject, setOpenProject] = useState<boolean>(false);

  function openProjects() {
    setOpenProject(true);
  }

  function closeProjects() {
    setOpenProject(false);
  }

  // squere visable

  const [homeHeight, setHomeHeight] = useState<boolean>(false);
  const [aboutMeHeight, setAboutMeHeight] = useState<boolean>(false);
  const [projectHeight, setProjectHeight] = useState<boolean>(false);
  const [contactHeight, setContactHeight] = useState<boolean>(false);
  // marginTop
  const [sqMarginTop, setsqMarginTop] = useState<any>("");
  // script for instantly use response from useState

  setTimeout(() => {
    sqMargin();
  }, 1);

  function sqMargin() {
    setTimeout(() => {
      if (homeHeight === true) {
        setsqMarginTop("18px");
      } else if (aboutMeHeight === true) {
        setsqMarginTop("153px");
      } else if (projectHeight === true) {
        setsqMarginTop("287px");
      } else if (contactHeight === true) {
        setsqMarginTop("419px");
      }
    }, 1);
  }

  // on | off project list
  const [projectList, setProjectList] = useState<string>("none");

  // move dot project list
  const [projectListDot, setProjectListDot] = useState<boolean>(false);

  const [showMenu, setShowMenu] = useState(false);

  const rotate = () => {
    const burger = document.querySelectorAll(".burger-menu__animated");
    for (let i = 0; i < burger.length; i++)
      burger[0].classList.add("transparent");
    burger[1].classList.add("rotate");
    burger[2].classList.add("before-rotate");
  };

  const toggleMenu = () => {
    const burger = document.querySelectorAll(".burger-menu__animated");
    if (!showMenu) {
      for (let i = 0; i < burger.length; i++) {
        burger[i].classList.add("width");
        burger[i].classList.add("close");
      }
      setTimeout(rotate, 0);
      setShowMenu(true);
    } else {
      for (let i = 1; i < burger.length; i++)
        burger[1].classList.remove("rotate");
      burger[2].classList.remove("before-rotate");

      const rotate = () => {
        for (let i = 0; i < burger.length; i++) {
          burger[i].classList.remove("close", "transparent", "width");
        }
      };
      setTimeout(rotate, 200);

      setShowMenu(false);
    }
  };

  const [openBurgerMenu, setopenBurgerMenu] = useState<boolean>(false);

  function openAndClose() {
    setopenBurgerMenu(!openBurgerMenu);
  }
  function openAndCloseBurgerLang() {
    setBLOAC(!BLOAC);
  }

  return (
    <>
      <div
        className="frame"
        onClick={(e) => {
          openAndClose();
          openAndCloseBurgerLang();
        }}
      >
        <div className="center">
          <div className="burger" onClick={toggleMenu}>
            <div className="burger-menu__animated"></div>
            <div className="burger-menu__animated after"></div>
            <div className="burger-menu__animated before"></div>
          </div>
        </div>
      </div>
      <nav
        id="main-nav"
        style={{ display: openBurgerMenu ? "flex" : "none" }}
        className={openBurgerMenu ? "burger-menu" : ""}
      >
        <ul id="ul-nav">
          <span
            className="vertical-line"
            style={{
              height: openProject ? "500px" : "400px",
            }}
          ></span>
          <span className="square" style={{ marginTop: sqMarginTop }}></span>

          <Home
            lang={lang}
            closeProjects={closeProjects}
            setHomeHeight={setHomeHeight}
            setAboutMeHeight={setAboutMeHeight}
            setProjectHeight={setProjectHeight}
            setContactHeight={setContactHeight}
            setProjectList={setProjectList}
            setProjectListDot={setProjectListDot}
          />
          <AboutMe
            lang={lang}
            closeProjects={closeProjects}
            setHomeHeight={setHomeHeight}
            setAboutMeHeight={setAboutMeHeight}
            setProjectHeight={setProjectHeight}
            setContactHeight={setContactHeight}
            setProjectList={setProjectList}
            setProjectListDot={setProjectListDot}
          />
          <Project
            lang={lang}
            openProjects={openProjects}
            setHomeHeight={setHomeHeight}
            setAboutMeHeight={setAboutMeHeight}
            setProjectHeight={setProjectHeight}
            setContactHeight={setContactHeight}
            setProjectList={setProjectList}
            projectList={projectList}
            setProjectListDot={setProjectListDot}
            projectListDot={projectListDot}
            setDotBack={setDotBack}
            dotBack={dotBack}
            projectOneDot={projectOneDot}
            setprojectOneDot={setprojectOneDot}
            projectTwoDot={projectTwoDot}
            setprojectTwoDot={setprojectTwoDot}
            projectThreeDot={projectThreeDot}
            setprojectThreeDot={setprojectThreeDot}
            dotMarginTop={dotMarginTop}
            setdotMarginTop={setdotMarginTop}
          />
          <Contact
            lang={lang}
            closeProjects={closeProjects}
            openProject={openProject}
            setHomeHeight={setHomeHeight}
            setAboutMeHeight={setAboutMeHeight}
            setProjectHeight={setProjectHeight}
            setContactHeight={setContactHeight}
            setProjectList={setProjectList}
            setProjectListDot={setProjectListDot}
          />
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
