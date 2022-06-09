import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { isEmail } from "validator";

import SpinnerButton from "../UI/SpinnerButton";

import styles from "./Footer.module.css";

export default function Footer({ subscribeToNews }) {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	async function submitFormHandler(event) {
		event.preventDefault();

		if (!isEmail(email)) return;

		setIsSubmitting(true);

		const response = await subscribeToNews({ email });

		if (!response instanceof Error) {
			setIsSuccess(true);
		} else if (response instanceof Error) {
			setIsSuccess(false);
		}

		setIsSubmitting(false);
		setEmail("");
	}

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<section className={styles.footerTop}>
					<div className={styles.footerTopLeft}>
						<h2>Join Our Newsletter</h2>
						<form className={styles.subscribeForm}>
							<input
								type="email"
								placeholder="Email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value.trim())}
								maxLength={40}
							/>
							<SpinnerButton
								value="Subscribe"
								loadingValue="Subscribing"
								loading={isSubmitting}
								isError={!isSuccess}
							/>
						</form>
					</div>
					<div className={styles.footerTopRight}>
						<div>
							<div className={styles.sponsorLogos}>
								<span>
									<Image
										src="/images/lbs logo-white.png"
										alt="LBS logo"
										width={112}
										height={40}
									/>
								</span>
								<span>
									<Image
										src="/images/boi logo.png"
										alt="BOI logo"
										width={175}
										height={60}
									/>
								</span>
							</div>
						</div>
						<div>
							<h2>Links</h2>
							<nav>
								<ul>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/admissions">Admissions and Enquiry</Link>
									</li>
									<li>
										<Link href="/contact">Contact Us</Link>
									</li>
									<li>
										<Link href="/blog">Blog</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</section>
				<section className={styles.footerBottom}>
					<Link href="/">
						<Image
							src="/images/logo.png"
							alt="EIC logo"
							width={128}
							height={128}
						/>
					</Link>
					<div>
						<p>Copyright 2022 Lagos Business School, All Rights Reserved.</p>
						<div className={styles.footerLinks}>
							<a href="https://www.facebook.com/Eicnigeriaa/" target={"_blank"}>
								<Image
									src="/icons/facebook.svg"
									alt="facebook Icon"
									width={28}
									height={28}
								/>
							</a>
							<a
								href="https://twitter.com/eicnigeria?t=Pt0glMW1u8JZcc6W1j935w&s=09"
								target={"_blank"}
							>
								<Image
									src="/icons/twitter.svg"
									alt="twitter Icon"
									width={28}
									height={28}
								/>
							</a>
							<a
								href="https://www.linkedin.com/company/eicnigeria/"
								target={"_blank"}
							>
								<Image
									src="/icons/linkedin.svg"
									alt="Linkedin Icon"
									width={28}
									height={28}
								/>
							</a>
							<a
								href="https://instagram.com/eicnigeria?igshid=YmMyMTA2M2Y="
								target={"_blank"}
							>
								<Image
									src="/icons/instagram.svg"
									alt="Instagram Icon"
									width={28}
									height={28}
								/>
							</a>
							<a
								href="https://instagram.com/eicnigeria?igshid=YmMyMTA2M2Y="
								target={"_blank"}
							>
								<Image
									src="/icons/telegram.svg"
									alt="Telegram Icon"
									width={28}
									height={28}
								/>
							</a>
						</div>
					</div>
				</section>
			</div>
		</footer>
	);
}
