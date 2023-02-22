import { NavLink } from "react-router-dom";

function AboutMe({
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
        className="li-nav am"
        onClick={(e) => {
          closeProjects();
          setHomeHeight(false);
          setAboutMeHeight(true);
          setProjectHeight(false);
          setContactHeight(false);
          setProjectList("none");
          setProjectListDot(false);
        }}
      >
        <NavLink to="/About-Me">
          <div className="about-me-nav">{lang.aboutme}</div>
        </NavLink>
      </li>
    </>
  );
}

export default AboutMe;
