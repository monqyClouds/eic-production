import Image from "next/image";

import { useEffect, useState } from "react";

import validator from "validator";
import SpinnerButton from "../UI/SpinnerButton";

import classes from "./ComingSoonContact.module.css";

export default function ComingSoonContact({ sendContactMsg }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	async function contactFormSubmitHandler(event) {
		event.preventDefault();
		setIsSubmitting(true);

		console.log({ isSubmitting });

		if (!name || !isValidEmail(email) || !message) {
			return;
		}

		const messageData = {
			name,
			email,
			message,
		};

		const isMessageSent = await sendContactMsg(messageData);

		if (isMessageSent instanceof Error) setIsSubmitted(false);
		else setIsSubmitted(true);

		resetInputEntries();

		function resetInputEntries() {
			setName("");
			setEmail("");
			setMessage("");
			setIsSubmitting(false);
			event.target.reset();
		}
	}

	function isValidEmail(email) {
		return validator.isEmail(email);
	}

	return (
		<section className={classes.contact}>
			<div className={classes.contactContent}>
				<h1>Contact Us</h1>
				<form
					className={classes.contactContentForm}
					onSubmit={contactFormSubmitHandler}
				>
					<input
						type="text"
						id="inputname"
						placeholder="Name"
						maxLength={40}
						onChange={(e) => {
							setName(e.target.value.trim());
						}}
					/>
					<input
						type="email"
						id="inputemail"
						placeholder="Email"
						onChange={(e) => {
							setEmail(e.target.value.trim());
						}}
						maxLength={40}
					/>
					<input
						type="text"
						id="inputmessage"
						placeholder="Message"
						onChange={(e) => {
							setMessage(e.target.value.trim());
						}}
						maxLength={70}
					/>
					<SpinnerButton
						value="Send"
						loadingValue="Sending..."
						loading={isSubmitting}
						isError={!isSuccess}
					/>
				</form>
			</div>

			<div className={classes.contactFooter}>
				<div className={classes.logoContainer}>
					<Image
						src="/images/Logo.png"
						alt="EIC logo"
						className={classes.contactFooterLogo}
						layout="responsive"
						width={200}
						height={200}
						sizes="(max-width: 600px) 112px, 200px"
					/>
				</div>
				<div className={classes.contactFooterText}>
					<p className={classes.contactFooterTextCopy}>
						Copyright &copy; 2022. Entrepreneurship Innovation Center, All Rights Reserved.
					</p>
					<div className={classes.contactFooterTextIcons}>
						<a href="https://www.facebook.com/Eicnigeriaa/" target={"_blank"}>
							<Image
								src="/icons/Facebook.svg"
								alt="facebook Logo"
								width={32}
								height={32}
							/>
						</a>
						<a
							href="https://twitter.com/eicnigeria?t=Pt0glMW1u8JZcc6W1j935w&s=09"
							target={"_blank"}
						>
							<Image
								src="/icons/twitter.svg"
								alt="twitter Logo"
								width={32}
								height={32}
							/>
						</a>
						<a
							href="https://www.linkedin.com/company/eicnigeria/"
							target={"_blank"}
						>
							<Image
								src="/icons/Linkedin.svg"
								alt="Linkedin Logo"
								width={32}
								height={32}
							/>
						</a>
						<a
							href="https://instagram.com/eicnigeria?igshid=YmMyMTA2M2Y="
							target={"_blank"}
						>
							<Image
								src="/icons/instagram-32.svg"
								alt="Email Logo"
								width={28}
								height={28}
								objectPosition="center"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
