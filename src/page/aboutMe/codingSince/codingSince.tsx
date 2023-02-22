import TimeCount from "../../../hook/timeCount/timeCount";
import { useEffect, useState } from "react";

function CodingSince({ lang }: { lang: any }) {
  type Props = {
    styles: { [key: string]: string };
  };

  const [HTMLLearningTime, setHTMLLearningTime] = useState(
    TimeCount(new Date(2022, 2, 14))
  );
  const [JSLearningTime, setJSLearningTime] = useState(
    TimeCount(new Date(2022, 4, 1))
  );
  const [ReactLearningTime, setReactLearningTime] = useState(
    TimeCount(new Date(2022, 5, 12))
  );
  const [TSLearningTime, setTSLearningTime] = useState(
    TimeCount(new Date(2022, 11, 4))
  );

  const Learn = ({ styles }: Props) => {
    useEffect(() => {
      let interval = setInterval(() => {
        setHTMLLearningTime(TimeCount(new Date(2022, 2, 14)));
        setJSLearningTime(TimeCount(new Date(2022, 4, 1)));
        setReactLearningTime(TimeCount(new Date(2022, 5, 12)));
        setTSLearningTime(TimeCount(new Date(2022, 11, 4)));
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }, []);
  };

  return (
    <>
      <div className="c-s-container">
        <h2>{lang.codingsince}</h2>
        <div className="c-s">
          <div className="option">
            <p>HTML + CSS</p>
            <p className="time">{HTMLLearningTime}</p>
          </div>
          <div className="option">
            <p>JavaScript</p>
            <p className="time">{JSLearningTime}</p>
          </div>
          <div className="option">
            <p>React</p>
            <p className="time">{ReactLearningTime}</p>
          </div>
          <div className="option">
            <p>TypeScript</p>
            <p className="time">{TSLearningTime}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodingSince;
