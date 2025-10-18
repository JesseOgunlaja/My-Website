import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/projects.module.css";

export default function Projects() {
	const multiplier = 300;
	const width = 2 * multiplier;
	const height = 1 * multiplier;

	return (
		<section className={styles.projectSection}>
			<h2>My Projects</h2>
			<div className={styles.projects}>
				<article>
					<Link href="https://harmoni.jesseogu.dev" target="_blank">
						<h3>Harmoni</h3>
						<p>A simple to do app using Next JS, Typescript and PostgreSQL</p>
						<Image
							src="/harmoni.png"
							alt="Harmoni"
							width={width}
							height={height}
						/>
					</Link>
				</article>
				<article>
					<Link href="https://shrinkr.dev" target="_blank">
						<h3>Shrinkr</h3>
						<p>A URL shortener using Next JS, Typescript and Redis</p>
						<Image
							src="/shrinkr.png"
							alt="Shrinkr"
							width={width}
							height={height}
						/>
					</Link>
				</article>
				<article>
					<Link href="https://streamthing.dev" target="_blank">
						<h3>Streamthing</h3>
						<p>
							A platform to implement real-time features on the web using Next
							JS and Typescript
						</p>
						<Image
							src="/streamthing.png"
							alt="Streamthing"
							width={width}
							height={height}
						/>
					</Link>
				</article>
			</div>
		</section>
	);
}
