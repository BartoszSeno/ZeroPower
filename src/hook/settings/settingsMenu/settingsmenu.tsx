import LangChange from "../../LangChange/langChange";

function SettingsMenu({
  setLangChange,
  lang,
  BLOAC,
  SLOAC,
  openAdnCloseSetings,
}: {
  setLangChange: any;
  lang: any;
  BLOAC: any;
  SLOAC: any;
  openAdnCloseSetings: any;
}) {
  return (
    <>
      <section
        className="setings-menu-container"
        style={{ display: !SLOAC ? "none" : "flex" }}
      >
        <div id="slose-menu">
          <div
            className="close"
            onClick={(e) => {
              openAdnCloseSetings();
            }}
          >
            X
          </div>
        </div>
        <form
          action="settings-options"
          className="language-settings"
          style={{ display: BLOAC || SLOAC ? "flex" : "none" }}
        >
          <label htmlFor="lang">{lang.changelang}</label>
          <LangChange setLangChange={setLangChange} />
        </form>
      </section>
    </>
  );
}

export default SettingsMenu;
