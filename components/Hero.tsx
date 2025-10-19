import styles from "@/styles/hero.module.css";
import Spinner from "./Spinner";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<h2>
				<span>
					<span>Startup Builder</span>
					<span>
						&
						<Spinner />
					</span>
				</span>
				<span>
					<span>Fullstack Developer</span>
				</span>
			</h2>
			<p>
				I&apos;m Jesse Ogunlaja, a fullstack developer and startup builder - I
				founded Streamthing, a startup to implement real-time features on the
				web. I build startups which attempt to solve problems real people are
				facing.
			</p>
		</section>
	);
}
