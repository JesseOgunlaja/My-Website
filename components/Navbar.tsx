import styles from "@/styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <h1>Jesse Ogunlaja</h1>
        </li>
        <li>
          <Link href="mailto:jesse@jesseogunlaja.com">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
