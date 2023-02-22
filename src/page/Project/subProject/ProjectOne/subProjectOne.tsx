function SubProjectOne({ lang }: { lang: any }) {
  return (
    <>
      <div className="sub-project-container">
        <div className="title-po">
          <h1>GAME SHOP</h1>
        </div>
        <div id="img-c">
          <div className="mac-pc-t">
            <img
              src="src\assets\img\mac-pc-t.png"
              alt="Image of mac Computer and Tablet"
            />
          </div>
          <div className="iphone-p">
            <img src="src\assets\img\iphone-p.png" alt="Image of Iphon" />
          </div>
        </div>
        <button className="demo">
          <a href="https://bartoszseno.github.io/Project-Shop/" target="_blank">
            DEMO
          </a>
        </button>
        <div className="sub-project-info-container">
          <div className="des-s">
            <br />
            <p>{lang.desOne1}</p>
            <p>
              {lang.desOne2} <span className="s-c">.json</span> {lang.file}
            </p>
            <p>{lang.desOne3}</p>
            <p>
              {lang.bookmark} "<span className="s-c">Computer Games</span>" & "
              <span className="s-c"> PlayStation Store" </span>
              {lang.desOne4} <span className="s-c"> .json </span>
              {lang.file}
            </p>
            <p>{lang.desOne5}</p>
            <h2>{lang.minus}</h2>
            <p>{lang.desOne6}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubProjectOne;
