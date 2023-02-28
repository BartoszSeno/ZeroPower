import { useState } from "react";
import "../../assets/css/settings/settings.css";
import "../../assets/css/settings/medaiS.css";
import SettingsMenu from "./settingsMenu/settingsmenu";

function Settings({
  setLangChange,
  lang,
  BLOAC,
  SLOAC,
  setSLOAC,
}: {
  setLangChange: any;
  lang: any;
  BLOAC: any;
  SLOAC: any;
  setSLOAC: any;
}) {
  function openAdnCloseSetings() {
    setSLOAC(!SLOAC);
  }

  return (
    <>
      <section className="setings-container mainsd">
        <div
          className="settings-img"
          onClick={(e) => {
            openAdnCloseSetings();
          }}
        >
          <img
            src="https://raw.githubusercontent.com/BartoszSeno/ZeroPower/main/src/assets/img/Settings_white.png"
            alt="Settings"
          />
        </div>
      </section>
      <SettingsMenu
        setLangChange={setLangChange}
        lang={lang}
        BLOAC={BLOAC}
        SLOAC={SLOAC}
        openAdnCloseSetings={openAdnCloseSetings}
      />
    </>
  );
}

export default Settings;
