import "../../assets/css/HomePage/home.css";
import "../../assets/css/HomePage/mediaH.css";
import TextChange from "../../hook/textChange/textChange";

function HomePage({ lang }: { lang: any }) {
  return (
    <>
      <section className="home-container" id="homesection">
        <div className="main-img">
          <img src="src\assets\img\testimg.png" alt="man in the photo" />
        </div>
        <div className="some-img">
          <img
            src="src\assets\img\astronaut-in-tea-break.gif"
            alt="astronaut in tea break"
          />
        </div>
        <div className="mini-desc">
          <p>
            {lang.hello}, {lang.im}
            <span className="s-c"> Bartosz Szymkowicz</span>,
          </p>
          <TextChange lang={lang} />
        </div>
        <div className="some-text">
          <p>
            {lang.sometext} <span className="s-c">{lang.websites}</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default HomePage;
