import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/projects.module.css";

export default function Projects() {
	const multiplier = 260;
	const width = 2 * multiplier;
	const height = 1 * multiplier;

	return (
		<section className={styles.projects}>
			<h2>My Projects</h2>
			<div className={styles.projectsList}>
				<article>
					<Link href="https://streamthing.dev" target="_blank">
						<h3>Streamthing</h3>
						<Image
							src="/streamthing.png"
							alt="Streamthing"
							width={width * 1.8}
							height={height * 1.8}
							loading="eager"
							priority
							quality={100}
						/>
					</Link>
				</article>
				<article>
					<Link href="https://harmoni.jesseogu.dev" target="_blank">
						<h3>Harmoni</h3>
						<Image
							src="/harmoni.png"
							alt="Harmoni"
							width={width}
							height={height}
							loading="eager"
							priority
							quality={100}
						/>
					</Link>
				</article>
				<article>
					<Link href="https://shrinkr.dev" target="_blank">
						<h3>Shrinkr</h3>
						<Image
							src="/shrinkr.png"
							alt="Shrinkr"
							width={width}
							height={height}
							loading="eager"
							priority
							quality={100}
						/>
					</Link>
				</article>
			</div>
		</section>
	);
}
