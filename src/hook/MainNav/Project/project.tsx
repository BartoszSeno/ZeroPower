import { NavLink } from "react-router-dom";
import ProjectList from "./projectList/list";

function Project({
  lang,
  openProjects,
  setHomeHeight,
  setAboutMeHeight,
  setProjectHeight,
  setContactHeight,
  setProjectList,
  projectList,
  setProjectListDot,
  projectListDot,
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
}: {
  lang: any;
  openProjects: any;
  setHomeHeight: any;
  setAboutMeHeight: any;
  setProjectHeight: any;
  setContactHeight: any;
  setProjectList: any;
  projectList: any;
  setProjectListDot: any;
  projectListDot: any;
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
}) {
  return (
    <>
      <li
        className="li-nav"
        onClick={(e) => {
          openProjects();
          setHomeHeight(false);
          setAboutMeHeight(false);
          setProjectHeight(true);
          setContactHeight(false);
          setProjectList("block");
          setProjectListDot(true);
        }}
      >
        <NavLink
          to="/Project"
          onClick={(e) => {
            setDotBack(false);
          }}
        >
          <div className="project-nav">{lang.project}</div>
        </NavLink>
        <ProjectList
          lang={lang}
          projectList={projectList}
          projectListDot={projectListDot}
          dotBack={dotBack}
          setDotBack={setDotBack}
          projectOneDot={projectOneDot}
          setprojectOneDot={setprojectOneDot}
          projectTwoDot={projectTwoDot}
          setprojectTwoDot={setprojectTwoDot}
          projectThreeDot={projectThreeDot}
          setprojectThreeDot={setprojectThreeDot}
          dotMarginTop={dotMarginTop}
          setdotMarginTop={setdotMarginTop}
        />
      </li>
    </>
  );
}

export default Project;
