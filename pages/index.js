import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import Meta from "@/components/Meta";

export default function Home() {
  const [increment, setIncrement] = useState(100);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [languageId, setLanguageId] = useState(0);
  const [stringId, setStringId] = useState(1);
  const languages = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "React JS",
    "Next JS",
  ];

  useEffect(() => {
    setTimeout(() => {
      if (
        languageId === languages.length &&
        text.length === 1 &&
        deleting === false
      ) {
        setLanguageId(0);
        setStringId(1);
        setText("");
      } else {
        let currentText = languages[languageId].slice(0, stringId);
        setText(currentText);
        if (stringId < languages[languageId].length && deleting === false) {
          setStringId(stringId + 1);
        } else {
          if (deleting === false) {
            setIncrement(1000);
          } else {
            setIncrement(100);
          }
          setDeleting(true);
          setStringId(stringId - 1);
          if (stringId === 1) {
            setLanguageId(languageId + 1);
            setDeleting(false);
          }
        }
      }
    }, increment);
  }, [stringId]);

  return (
    <>
      <Meta />
      <style jsx>{`
        .fa-react,.fa-css3,.fa-code,.fa-js {
          transform: translateX(0.1px)
        }
      `}</style>
      <div className={styles.home}>
        <div className={styles.info}>
          <div className={styles.hi}>I'm</div>
          <h1 className={styles.name}><span>Jesse Ogunlaja</span></h1>
          <p>
            I code <span className={styles.language}>{text}</span>
            <span className={increment === 1000 ? styles.blink : null}>|</span>
          </p>
          <a className={styles.email} href="mailto:jesseogunlaja@gmail.com">
            <i aria-hidden className="fa fa-envelope fa-gradient"></i>
            <div> jesseogunlaja@gmail.com</div>
          </a>
          <br />
          <a
            target="_blank"
            className={styles.github}
            href="https://github.com/JesseOgunlaja"
          >
            <i aria-hidden className="fa-brands fa-github"></i>
            <div> JesseOgunlaja</div>
          </a>
        </div>
        <div className={styles.actualLogo}>
          <p className={styles.logoTitle}>Jesse Ogunlaja</p>
          <div className={styles.languageLogos}>
            <i
              aria-hidden
              id={styles.faGradient}
              className="fa-brands fa-react fa-3x"
            ></i>
            <i
              aria-hidden
              id={styles.faGradient}
              className="fa-brands fa-js fa-3x"
            ></i>
            <i
              aria-hidden
              id={styles.faGradient}
              className="fa-solid fa-code fa-3x"
            ></i>
            <i
              aria-hidden
              id={styles.faGradient}
              className="fa-brands fa-css3 fa-3x"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}