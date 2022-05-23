import Head from "next/head";
import Hero from "../../components/UI/Hero";
import Sponsors from "../../components/UI/Sponsors";

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>EIC - About Us</title>
				<meta
					name="description"
					content="Entrepreneurship Innovation Center - About Us "
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>

			<Hero tagline="Empowering Youths For Sustainable Development" />
			<Sponsors />
		</div>
	);
}
