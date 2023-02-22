function AboutMe({ lang }: { lang: any }) {
  return (
    <>
      <div className="amc">
        <h1>{lang.aboutme}</h1>
        <p className="info">
          <span className="s-c">23 years </span> /
          <span className="s-c"> Żary</span> /
          <span className="s-c"> {lang.programmer}</span>
        </p>
        <p className="description">
          <span className="langth">
            {lang.sentence1}
            <span className="s-c">?</span>"{" "}
          </span>
          <br />
          <span className="s-c">{lang.sentence2}</span>
          {lang.sentence3}
          {lang.sentence4}
          {lang.sentence5}
          {lang.sentence6}
          <br />
          <span className="translate">
            {lang.courses1}
            <span className="hiden">{lang.courses1transalte}</span>
          </span>
          {", "}
          {lang.courses2}
          {lang.courses3}
          <br />
          {lang.sentence7}
          {lang.sentence8}
          <span className="s-c">{lang.frontend}</span>.
        </p>
      </div>
    </>
  );
}

export default AboutMe;
