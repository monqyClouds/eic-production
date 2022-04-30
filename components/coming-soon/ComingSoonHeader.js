import Image from "next/image";

import { useState, useEffect } from "react";

import validator from "validator"

import classes from "./ComingSoonHeader.module.css";

import SpinnerButton from "../UI/SpinnerButton";

export default function ComingSoonHeader({subscribeToNews}) {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

  async function heroFormSubmitHandler(event) {
		event.preventDefault();

		if (!validator.isEmail(email)) {
			return;
		}

		setIsSubmitting(true);

		const response = await subscribeToNews({ email });

		if (!response instanceof Error) {
			setIsSuccess(true);
		} else if (response instanceof Error) {
			setIsSuccess(false);
		}

		setIsSubmitting(false);
		setEmail("");
		event.target.reset();
  }
  
  return (
		<section className={classes.hero}>
			<div className={classes.heroImg}>
				<Image
					src="/images/Logo.png"
					alt="EIC logo"
					className={classes.logo}
					width={260}
					height={260}
				/>
				<p>Coming soon...</p>
			</div>

			<div className={classes.heroCta}>
				<div className={classes.heroCtaText}>
					<p className={classes.mobileComingsoon}>Coming soon</p>
					<p>We have a whole lot in store for you!!</p>
					<p>We'd be delighted to let you know when we're set!</p>
				</div>
				<form className={classes.heroCtaForm} onSubmit={heroFormSubmitHandler}>
					<input
						type="email"
						placeholder="Email"
						name="email"
						onChange={(e) => setEmail(e.target.value.trim())}
						maxLength={40}
					/>
					<SpinnerButton
						value="Notify me!"
						loadingValue="Registering..."
						loading={isSubmitting}
						isError={!isSuccess}
					/>
				</form>
			</div>
		</section>
	);
}