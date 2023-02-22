function MySkills({ lang }: { lang: any }) {
  return (
    <>
      <div className="skills-container">
        <h2>{lang.myskills}</h2>
        <div className="my-skills">
          <p className="skill-option">JavaScript</p>
          <p className="skill-option">React</p>
          <p className="skill-option">HTML</p>
          <p className="skill-option">CSS</p>
          <p className="skill-option">English</p>
          <p className="skill-option">TypeScript</p>
          <p className="skill-option">RWD</p>
        </div>
      </div>
    </>
  );
}

export default MySkills;
