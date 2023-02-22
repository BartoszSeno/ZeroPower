function SubProjectTwo({ lang }: { lang: any }) {
  return (
    <>
      <div className="sub-project-container ptspc">
        <div className="title-po">
          <h1>GAME WEB SITE</h1>
        </div>

        <div id="img-c">
          <div className="gif-p2-m">
            <img src="src\assets\img\p2g.gif" alt="Image of project site" />
          </div>
          <div className="line-mix">
            <img
              src="src\assets\img\testline.png"
              alt="Image of multiple line"
            />
          </div>
        </div>
        <button className="demo dbtp">
          <a href="https://bartoszseno.github.io/Project-S/" target="_blank">
            DEMO
          </a>
        </button>
        <div className="sub-project-info-container">
          <div className="des-two-s">
            <p>
              {lang.desTwo1}
              <span className="s-c">{lang.desTwo1Scale75to90}</span>
              {lang.desTwo1And}
              <span className="s-c">{lang.desTwo1Scale100}</span>
            </p>
            <p>{lang.desTwo2}</p>
            <p>{lang.desTwo3}</p>
            <p>
              {lang.desTwo4}
              <span className="s-c">{lang.desTwo4Success}</span>
              {lang.desTwo4WillAppear}
            </p>
            <p>{lang.desTwo5}</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubProjectTwo;
