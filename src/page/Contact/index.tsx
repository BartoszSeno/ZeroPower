import { useState } from "react";
import "../../assets/css/contact/contact.css";
import "../../assets/css/contact/mediaC.css";

function ContactPage({ lang }: { lang: any }) {
  const [copyText, setCopyText] = useState<any>("bartoszymkowicz@gmail.com");

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);

    setTimeout(() => {
      const copied = document.querySelector(".box-copied") as any;

      copied.style.display = "flex";

      setTimeout(() => {
        const copied = document.querySelector(".box-copied") as any;

        copied.style.display = "none";
      }, 800);
    }, 1);
  };

  return (
    <>
      <section className="c-t">
        <div className="simpe">
          <p className="s-c hmm">{lang.hmm}</p>
          <p>{lang.simple}</p>
        </div>
        <div className="email">
          <p className="s-c" onClick={handleCopy}>
            bartoszymkowicz@gmail.com
          </p>
          <span className="box-copied">{lang.copied}</span>
        </div>
        <div className="socialmedia">
          <div className="secial">
            <a
              href="https://www.instagram.com/shiikor/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/BartoszSeno/ZeroPower/main/src/assets/img/social/ig.png"
                alt="instagram icon"
              />
            </a>
            <a
              href="https://github.com/BartoszSeno"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/BartoszSeno/ZeroPower/main/src/assets/img/social/gh.png"
                alt="git hub icon"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
