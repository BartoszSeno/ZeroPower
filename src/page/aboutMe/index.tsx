import "../../assets/css/aboutMe/aboutMe.css";
import "../../assets/css/aboutMe/mediaAM.css";
import ImgMainAM from "./img/imgMain";
import AboutMe from "./aboutNe/aboutMe";
import MySkills from "./mySkills/mySkills";
import CodingSince from "./codingSince/codingSince";

function AboutMePage({ lang }: { lang: any }) {
  return (
    <>
      <section className="am-container">
        <ImgMainAM />
        <div className="am-c">
          <AboutMe lang={lang} />
          <MySkills lang={lang} />
          <CodingSince lang={lang} />
        </div>
      </section>
    </>
  );
}

export default AboutMePage;
