import Link from "next/link";
import styles from "@/styles/cta.module.css";

export default function CTA() {
	return (
		<section className={styles.cta}>
			<h2>Looking for a Fullstack Developer?</h2>
			<p>
				Turning ideas into fully functioning applications, from initial concept
				to final deployment.
			</p>
			<Link href="mailto:jesse@jesseogu.dev">
				Ready to bring your ideas to life?
			</Link>
		</section>
	);
}
