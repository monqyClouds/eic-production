import Head from "next/head";
import HomeEvents from "../components/home/HomeEvents";
import Hero from "../components/UI/Hero"
import HomePrograms from "../components/home/HomePrograms";
import Sponsors from "../components/UI/Sponsors";
import FAQ from "../components/UI/FAQ";
import BlogList from "../components/UI/BlogList";
import HomeFeature from "../components/home/HomeFeatures";

export default function HomePage() {
	
	return (
		<div>
			<Head>
				<title>EIC</title>
				<meta name="description" content="Entrepreneurship Innovation Center" />
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

			<Hero
				tagline="Developing Impact-Driven Entrepreneurs For National Transformation"
				text="Building Great Founders to build Great Business"
			/>
			<HomeFeature />
			<HomeEvents />
			<BlogList />
			<FAQ />
			<Sponsors />
			<HomePrograms />
		</div>
	);
}
