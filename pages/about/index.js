import Head from "next/head";
import MainNavigation from "../../components/layout/MainNavigation";
import Hero from "../../components/UI/Hero";
import AboutGallery from "../../components/about/AboutGallery";
import AboutOutcome from "../../components/about/AboutOutcome";
import AboutTraining from "../../components/about/AboutTraining";
import AboutTeam from "../../components/about/AboutTeam";
import ApplyCta from "../../components/UI/ApplyCta";

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
			<MainNavigation />

			<Hero
				tagline="Empowering Youths For Sustainable Development"
				linkText={"Learn More"}
				linkAddress={"/admissions"}
				bgImage={
					'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url("/images/african-american-lady-safety-helmet-with-notebook-near-building-construction.jpg")'
				}
			/>
			<AboutGallery />
			<AboutOutcome />
			<AboutTraining />
			<AboutTeam />
			<ApplyCta />
		</div>
	);
}
