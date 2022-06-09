import Head from "next/head";
import HomeEvents from "../components/home/HomeEvents";
import HomePrograms from "../components/home/HomePrograms";
import FAQ from "../components/UI/FAQ";
import BlogList from "../components/UI/BlogList";
import HomeFeature from "../components/home/HomeFeatures";
import HomeHero from "../components/home/HomeHero";
import HomeIntro from "../components/home/HomeIntro";
import HomeImages from "../components/home/HomeImages";

export default function HomePage() {
	const inaugralImages = [
		{
			src: "/images/inaugral-1.jpg",
		},
		{
			src: "/images/inaugral-2.jpg",
		},
		{
			src: "/images/inaugral-3.jpg",
		},
		{
			src: "/images/inaugral-4.jpg",
		},
		{
			src: "/images/inaugral-5.png",
		},
		{
			src: "/images/inaugral-6.png",
		},
	];

	const inaugralTagline =
		"The excecution of the MOU and Inauguration of the governing council";
	const inaugralDate = "April 19, 2022";
	const inaugralText =
		"Speaking at the inauguration of the Governing Council, The Director of the Centre, Dr Henrietta Onwuegbuzie, stated “A lot has been said about the power of entrepreneurship and its ability to bring about transformational change in the Nigerian economy. With the Entrepreneurship Innovation Centre, LBS will play a key part in creating an enabling environment for entrepreneurship and SMEs to thrive.";

	const meeting = {
		meetingImages: [
			{
				src: "/images/meeting-1.jpg",
			},
			{
				src: "/images/meeting-2.jpg",
			},
			{
				src: "/images/meeting-3.jpg",
			},
			{
				src: "/images/meeting-4.jpg",
			},
			{
				src: "/images/meeting-5.jpg",
			},
		],
		meetingTagline: "Inaugural meeting of the governing council",
		meetingDate: "April 29, 2022",
		meetingText:
			"Members of the governing council include; Ms Evelyn Oputu (Board Chair), Dr. Ezekiel Oseni (Deputy Board Chair), Mr. Obaro Osah (Secretary), Mrs. Ireti Daramola (Member), Alhaji Abdul Ganiyu-Mohammed (Member), Mr. Charles Ivenso (Member), Dr. Henrietta Onwuegbuzie (Member).",
	};

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

			<HomeHero
				tagline="Developing Impact-Driven Entrepreneurs For National Transformation"
				text="Building Great Founders to build Great Business"
			/>
			<HomeIntro />
			<HomeImages
				images={inaugralImages}
				tagline={inaugralTagline}
				date={inaugralDate}
				text={inaugralText}
			/>
			<HomeImages
				images={meeting.meetingImages}
				tagline={meeting.meetingTagline}
				date={meeting.meetingDate}
				text={meeting.meetingText}
			/>
			<HomeFeature />
			<HomeEvents />
			<BlogList />
			<FAQ />
			<HomePrograms />
		</div>
	);
}
