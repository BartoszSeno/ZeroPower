import LangChange from "../../LangChange/langChange";

function SettingsMenu({
  setLangChange,
  openSetings,
  setOpenSetings,
  lang,
}: {
  setLangChange: any;
  openSetings: any;
  setOpenSetings: any;
  lang: any;
}) {
  return (
    <>
      <section
        className="setings-menu-container"
        style={{ display: !openSetings ? "none" : "flex" }}
      >
        <div id="slose-menu">
          <div
            className="close"
            onClick={(e) => {
              setOpenSetings(false);
            }}
          >
            X
          </div>
        </div>
        <form action="settings-options" className="language-settings">
          <label htmlFor="lang">{lang.changelang}</label>
          <LangChange setLangChange={setLangChange} />
        </form>
      </section>
    </>
  );
}

export default SettingsMenu;
