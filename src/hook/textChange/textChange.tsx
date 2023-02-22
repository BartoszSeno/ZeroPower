import Typewriter from "react-ts-typewriter";

function TextChange({ lang }: { lang: any }) {
  return (
    <>
      <p className="text-generator">
        <Typewriter
          text={["Front-end Developer", "Programmer"]}
          loop={true}
          speed={80}
          delay={4000}
        />
      </p>
    </>
  );
}

export default TextChange;
