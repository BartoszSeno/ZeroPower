function LangChange({ setLangChange }: { setLangChange: any }) {
  function LangSelect() {
    var select = document.getElementById("langChange") as any;
    var option = select.options[select.selectedIndex].value;
    console.log(option);

    setLangChange(option);
  }

  return (
    <>
      <select id="langChange" onChange={LangSelect}>
        <option value="EngLangNav">English</option>
        <option value="PlnLangNav">Polska</option>
      </select>
    </>
  );
}

export default LangChange;
