import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
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
      </ul>
    </nav>
  );
};

export default Nav;
