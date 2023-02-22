import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./hook/MainNav/nav";
import Footer from "./hook/Footer/footer";
import { useState } from "react";
import "./App.css";
import HomePage from "./page/home";
import AboutMePage from "./page/aboutMe";
import ProjectPage from "./page/Project";
import ContactPage from "./page/Contact";
import Settings from "./hook/settings/settings";
import { PlnLangNav } from "./data/Lang/NavLang/pl";
import { EngLangNav } from "./data/Lang/NavLang/eng";
import { useEffect } from "react";
import FollowMe from "./hook/followMe/followme";
import SubProjectOne from "./page/Project/subProject/ProjectOne/subProjectOne";
import SubProjectTwo from "./page/Project/subProject/ProjectTwo/subProjectTwo";
import SubProjectThree from "./page/Project/subProject/ProjectThree/SubProjectThree";

function App() {
  // Language change
  const [langChange, setLangChange] = useState("EngLangNav");

  const engLang = EngLangNav;
  const plnLang = PlnLangNav;

  const [language, setLanguage] = useState<any[]>([]);

  // language choice for display

  useEffect(() => {
    var lol = langChange;
    if (lol === "EngLangNav") {
      setLanguage(engLang);
    } else if (lol === "PlnLangNav") {
      setLanguage(plnLang);
    } else {
      console.log("huh");
    }
  }, [engLang, langChange, plnLang]);

  // Dont for sub Project page

  const [dotBack, setDotBack] = useState<boolean>(false);

  const [projectOneDot, setprojectOneDot] = useState<boolean>(false);
  const [projectTwoDot, setprojectTwoDot] = useState<boolean>(false);
  const [projectThreeDot, setprojectThreeDot] = useState<boolean>(false);

  const [dotMarginTop, setdotMarginTop] = useState<string>("-30px");

  return (
    <>
      {language.map((lang) => {
        return (
          <BrowserRouter basename="/ZeroPower">
            <MainNav
              langChange={langChange}
              lang={lang}
              setDotBack={setDotBack}
              dotBack={dotBack}
              projectOneDot={projectOneDot}
              setprojectOneDot={setprojectOneDot}
              projectTwoDot={projectTwoDot}
              setprojectTwoDot={setprojectTwoDot}
              projectThreeDot={projectThreeDot}
              setprojectThreeDot={setprojectThreeDot}
              dotMarginTop={dotMarginTop}
              setdotMarginTop={setdotMarginTop}
              setLangChange={setLangChange}
            />
            <Settings setLangChange={setLangChange} lang={lang} />
            <Routes>
              <Route path="/" element={<HomePage lang={lang} />}></Route>
              <Route
                path="/About-Me"
                element={<AboutMePage lang={lang} />}
              ></Route>
              <Route
                path="/Project"
                element={
                  <ProjectPage
                    setprojectOneDot={setprojectOneDot}
                    setprojectTwoDot={setprojectTwoDot}
                    setprojectThreeDot={setprojectThreeDot}
                    setDotBack={setDotBack}
                    lang={lang}
                  />
                }
              ></Route>

              <Route
                path="/ProjectOne"
                element={<SubProjectOne lang={lang} />}
              ></Route>
              <Route
                path="/ProjectTwo"
                element={<SubProjectTwo lang={lang} />}
              ></Route>
              <Route path="/ProjectThree" element={<SubProjectThree />}></Route>
              <Route
                path="/Contact"
                element={<ContactPage lang={lang} />}
              ></Route>
            </Routes>
          </BrowserRouter>
        );
      })}
    </>
  );
}

export default App;
