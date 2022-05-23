import Link from "next/link";
import Image from "next/image";

import styles from "./MainNavigation.module.css";

function MainNavigation() {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Link className={styles.logo} href="/">
					<Image
						src="/images/header-logo.png"
						alt="EIC logo"
						width={128}
						height={128}
					/>
				</Link>
				<nav>
					<ul>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li>
							<Link href="/admissions">Admissions & Application</Link>
						</li>
						<li>
							<Link href="/blog">Blog</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default MainNavigation;
