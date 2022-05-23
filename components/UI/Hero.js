import Link from "next/link";

import styles from "./Hero.module.css";

export default function Hero({tagline, text}) {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				<div className={styles.heroText}>
					<h1>{tagline}</h1>
					{text && <h3>{text}</h3>}
					<Link href="/admissions">
						<button>Apply Now &rarr; </button>
					</Link>
				</div>
			</div>
		</section>
	);
}
