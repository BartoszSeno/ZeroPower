import { useState } from "react";
import "../../assets/css/settings/settings.css";
import "../../assets/css/settings/medaiS.css";
import SettingsMenu from "./settingsMenu/settingsmenu";

function Settings({ setLangChange, lang }: { setLangChange: any; lang: any }) {
  const [openSetings, setOpenSetings] = useState<boolean>(false);
  return (
    <>
      <section className="setings-container mainsd">
        <div className="settings-img">
          <img
            src="https://raw.githubusercontent.com/BartoszSeno/ZeroPower/main/src/assets/img/Settings_white.png"
            alt="Settings"
            onClick={(e) => {
              setOpenSetings(true);
            }}
          />
        </div>
      </section>
      <SettingsMenu
        setLangChange={setLangChange}
        openSetings={openSetings}
        setOpenSetings={setOpenSetings}
        lang={lang}
      />
    </>
  );
}

export default Settings;
