import { Link } from "react-router-dom";

function ProjectThree({
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
              <h1>Clicker Game</h1>
              <div className="des">
                <p>Counting / Clicking / Upgrade!</p>
              </div>
            </div>
            <div className="language-p">
              <div className="js lang-w">TypeScript</div>
              <div className="react lang-w">React</div>
              <div className="rwd lang-w">RWD</div>
            </div>
            <div className="workInProgress">WORK IN PROGRESS</div>
          </div>
          <div className="name-p">
            <Link
              to="/ProjectThree"
              onClick={(e) => {
                setprojectOneDot(false);
                setprojectTwoDot(false);
                setprojectThreeDot(true);
                setDotBack(true);
              }}
            >
              <div className="b-more-info">
                <button>{lang.moreinfo}</button>
              </div>
            </Link>
            <div className="b-demo">
              <button>Demo</button>
            </div>
          </div>
        </div>
        <div className="botom-box-p"></div>
      </div>
    </>
  );
}

export default ProjectThree;
