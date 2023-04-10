import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import Head from 'next/head'
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
    "JavaScript",
    "React JS",
    "Next JS",
    "TypeScript",
  ];

  useEffect(() => {
    setTimeout(() => {
      if (languageId === languages.length - 1) {
        setLanguageId(0);
      }
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
    }, increment);
  }, [stringId]);

  return (
    <>
    <Meta/>
      <Head>
      <script src="https://kit.fontawesome.com/b9c7cb7078.js" crossorigin="anonymous"></script>
      </Head>
      <div className={styles.home}>
      <div className={styles.info}>
        <div className={styles.hi}>I'm</div>
        <div className={styles.name}>Jesse Ogunlaja</div>
        <div>
          I code <span className={styles.language}>{text}</span>
          <span className={increment === 1000 && styles.blink}>|</span>
        </div>
        <a className={styles.email} href="mailto:jesseogunlaja@gmail.com">
            <i className="fa fa-envelope fa-gradient"></i>
            <div> jesseogunlaja@gmail.com</div>
        </a>
        <br/>
        <a target="_blank" className={styles.github} href="https://github.com/JesseOgunlaja">
        <i class="fa-brands fa-github"></i>
        <div> @JesseOgunlaja</div>
        </a>
      </div>
      <div className={styles.actualLogo}>
        <div className={styles.logoTitle}>Jesse Ogunlaja</div>
        <div className={styles.languageLogos}>
          <i id={styles.faGradient} class="fa-brands fa-react fa-3x"></i>
          <i id={styles.faGradient} class="fa-brands fa-js fa-3x"></i>
          <i id={styles.faGradient} class="fa-solid fa-code fa-3x"></i>
          <i id={styles.faGradient} class="fa-brands fa-css3 fa-3x"></i>
        </div>
      </div>
      </div>
    </>
  );
}
