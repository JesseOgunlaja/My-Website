import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import Meta from "@/components/Meta";

export default function Home() {
  const [languages] = useState([
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "React JS",
    "Next JS",
  ]);

  return (
    <>
      <Meta />
      <style jsx>{`
        .fa-react,
        .fa-css3,
        .fa-code,
        .fa-js {
          transform: translateX(0.1px);
        }
      `}</style>
      <div className={styles.home}>
        <div className={styles.info}>
          <div className={styles.hi}>I'm</div>
          <h1 className={styles.name}>
            <span>Jesse Ogunlaja</span>
          </h1>
          <div className={styles.languageBox}>
            <div className={styles.code}>I code</div>
            <div>
              <div className={styles.languages}>
                {languages.map((language) => (
                  <span>{language}</span>
                ))}
              </div>
            </div>
          </div>
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
