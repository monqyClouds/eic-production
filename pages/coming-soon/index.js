import Head from "next/head";

import ComingSoonAbout from "../../components/coming-soon/ComingSoonAbout";
import ComingSoonContact from "../../components/coming-soon/ComingSoonContact";
import ComingSoonHeader from "../../components/coming-soon/ComingSoonHeader";

import styles from "../../styles/Home.module.css";

export default function ComingSoon() {
	async function contactUsHandler(messageData) {
		console.log(messageData);
		const response = await fetchApi("../api/contact", messageData)
		return response;
	}

	async function subscribeUserHandler(userMail) {

		const response5 = async () => {
			const begin = performance.now();
			const response = await fetch("/api/subscribe", {
				method: "POST",
				body: JSON.stringify(userMail),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
			});
			const res = await response.json();
			console.log({ res, completedIn: performance.now() - begin });
			return res;
		};

		// const response = await fetchApi("../api/subscribe", userMail)
		const res = await response5();
		return res;
	}

	async function initConnect() {
		const response = await fetchApi("../api/init-connect", {});
		return response;
	}

	async function fetchApi(url, payload) {
		try {
			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify(payload),
				headers: {
					Accept: "application/json, text/plain, */*",
					"Content-Type": "application/json",
				},
			});
			if (!response.ok) throw new Error("Message not sent");
			return true;
		} catch (error) {
			return error;
		}
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>EIC</title>
				<meta name="description" content="Entrepreneurship Innovation Center" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<main className={styles.main}>
				<ComingSoonHeader subscribeToNews={subscribeUserHandler} />
        <ComingSoonAbout />
				<ComingSoonContact sendContactMsg={contactUsHandler} />
			</main>
		</div>
	);
}
