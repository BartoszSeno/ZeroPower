import "../../assets/css/project/project.css";
import "../../assets/css/project/mediaP.css";
import ProjectOne from "./ProjektOne/ProjectOne";
import ProjectTwo from "./ProjectTwo/projectTwo";
import ProjectThree from "./ProjectThree/projectThree";

function ProjectPage({
  setDotBack,
  setprojectOneDot,
  setprojectTwoDot,
  setprojectThreeDot,
  lang,
}: {
  setDotBack: any;
  setprojectOneDot: any;
  setprojectTwoDot: any;
  setprojectThreeDot: any;
  lang: any;
}) {
  return (
    <>
      <section className="project-container">
        <div className="project">
          <ProjectOne
            setprojectOneDot={setprojectOneDot}
            setprojectTwoDot={setprojectTwoDot}
            setprojectThreeDot={setprojectThreeDot}
            setDotBack={setDotBack}
            lang={lang}
          />
          <ProjectTwo
            setprojectOneDot={setprojectOneDot}
            setprojectTwoDot={setprojectTwoDot}
            setprojectThreeDot={setprojectThreeDot}
            setDotBack={setDotBack}
            lang={lang}
          />
          <ProjectThree
            setprojectOneDot={setprojectOneDot}
            setprojectTwoDot={setprojectTwoDot}
            setprojectThreeDot={setprojectThreeDot}
            setDotBack={setDotBack}
            lang={lang}
          />
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
