import { Link } from "react-router-dom";

function ProjectTwo({
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
      <div className="box">
        <div className="upper-box">
          <span className="insert-boss"></span>
          <div className="upper-box-info">
            <div className="title-and-des">
              <h1>Project S</h1>
              <div className="des">
                <p>Game marketing page</p>
              </div>
            </div>
            <div className="language-p">
              <div className="js lang-w">JavaScript</div>
              <div className="react lang-w">React</div>
            </div>
          </div>
          <div className="name-p">
            <Link
              to="/ProjectTwo"
              onClick={(e) => {
                setprojectOneDot(false);
                setprojectTwoDot(true);
                setprojectThreeDot(false);
                setDotBack(true);
              }}
            >
              <div className="b-more-info">
                <button>{lang.moreinfo}</button>
              </div>
            </Link>
            <div className="b-demo">
              <a
                href=" https://bartoszseno.github.io/Project-S/"
                target="_blank"
              >
                <button>Demo</button>
              </a>
            </div>
          </div>
        </div>
        <div className="botom-box-p"></div>
      </div>
    </>
  );
}

export default ProjectTwo;
