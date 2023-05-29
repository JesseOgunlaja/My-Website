import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { useState } from "react";

const Nav = () => {
  const [navShwoing, setNavShowing] = useState("false");

  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.name}>
            <Link href="/">Jesse Ogunlaja</Link>
          </li>
          <div className={styles.links}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/projects"}>My Projects</Link>
            </li>
            <li>
              <Link href={"/about"}>About Me</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Me</Link>
            </li>
          </div>
          <li className={styles.bar}>
            <div
              className={styles.actualBar}
              onClick={() =>
                navShwoing === "false"
                  ? setNavShowing(true)
                  : setNavShowing(!navShwoing)
              }
            >
              <hr className={styles.bar1} />
              <hr className={styles.bar2} />
              <hr className={styles.bar3} />
            </div>
          </li>
        </ul>
      </nav>
      {/* {navShwoing && ( */}
      <div
        className={[
          `${styles.sideNav} ${
            navShwoing !== "false"
              ? navShwoing
                ? styles.true
                : styles.false
              : undefined
          }`,
        ]}
      >
        <div className={styles.phoneLinks}>
          <Link onClick={() => setNavShowing(false)} href={"/"}>Home</Link>
          <Link onClick={() => setNavShowing(false)} href={"/projects"}>My Projects</Link>
          <Link onClick={() => setNavShowing(false)} href={"/about"}>About Me</Link>
          <Link onClick={() => setNavShowing(false)} href={"/contact"}>Contact Me</Link>
        </div>
      </div>
    </div>
    
  );
};

export default Nav;
