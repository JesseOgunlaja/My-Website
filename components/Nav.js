import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.name}>Jesse Ogunlaja</li>
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
          <div className={styles.actualBar} onClick={() => console.log("hi")}>
          <hr className={styles.bar1}/>
          <hr className={styles.bar2}/>
          <hr className={styles.bar3}/>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
