import Link from "next/link";
import styles from "@/styles/navbar.module.css";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<h1>Jesse Ogunlaja</h1>
				</li>
				<li>
					<Link href="mailto:jesse@jesseogu.dev">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
