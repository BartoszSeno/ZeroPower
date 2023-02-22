import { NavLink } from "react-router-dom";

function Contact({
  lang,
  closeProjects,
  openProject,
  setHomeHeight,
  setAboutMeHeight,
  setProjectHeight,
  setContactHeight,
  setProjectList,
  setProjectListDot,
}: {
  lang: any;
  closeProjects: any;
  openProject: any;
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
          setHomeHeight(false);
          setAboutMeHeight(false);
          setProjectHeight(false);
          setContactHeight(true);
          setProjectList("none");
          setProjectListDot(false);
        }}
        style={{ marginTop: openProject ? "100px" : "0px" }}
      >
        <NavLink to="/Contact">
          <div className="contact-nav">{lang.contact}</div>
        </NavLink>
      </li>
    </>
  );
}

export default Contact;
