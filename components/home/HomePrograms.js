import Link from "next/link";

import styles from "./HomePrograms.module.css";

export default function HomePrograms() {
	return (
		<section className={styles.applyCta}>
			<h2>Apply Today!</h2>
			<Link href="/admissions">
				<button>View Programmes</button>
			</Link>
		</section>
	);
}
