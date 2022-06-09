import Image from "next/image";
import { Container, Box, Text, Heading, Fade } from "@chakra-ui/react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import styles from "./HomeImages.module.css";

export default function HomeImages({images, tagline, date, text}) {
	
	return (
		<Container maxW={"122.8rem"} margin={"0 auto"} padding={"12.8rem 0"} h={"max-content"}>
			<Splide
				aria-label="Images slider"
				hasTrack={false}
				
				options={{
					rewind: true,
					width: "122.8rem",
					type: "fade",
					perPage: 1,
					perMove: 1,
					autoplay: true,
					drag: true,
					pagination: false,
					pauseOnFocus: true,
					pauseOnHover: true,
				}}
			>
				<SplideTrack>
					{images.map((image, index) => (
					<SplideSlide key={index}>
						<Box>
							<Image
								src={image.src}
								height={680}
								width={1228}
								alt={"A group of people sitted round a table"}
							/>
						</Box>
						<Box
							position={"absolute"}
							left={0}
							bottom={0}
							width={"100%"}
							height={"100%"}
							bgImage={
								"linear-gradient(180deg, rgba(4, 23, 73, 0.15) 0%, rgba(4, 23, 73, 0.75) 81.25%, rgba(4, 23, 73, 0.75) 100%);"
							}
						></Box>
					</SplideSlide>

					))}
				</SplideTrack>
					<Box
						position={"absolute"}
						left={"4rem"}
						bottom={"7rem"}
						maxWidth={"100rem"}
					>
						<Heading
							as={"h3"}
							fontSize={"3.6rem"}
							fontWeight={700}
							fontFamily={"Merriweather"}
							color={"#FFFFFF"}
							lineHeight={"4.4rem"}
							marginBottom={"2rem"}
						>
							{tagline}
						</Heading>
						<Text
							fontSize={"2.4rem"}
							fontFamily={"Segoe UI"}
							color={"#FF7A5C"}
							lineHeight={"2.8rem"}
						>
							{date}
						</Text>
					</Box>
				<div className={`splide__arrows ${styles.splide__arrows}`}>
					<button
						className={
							"splide__arrow splide__arrow--prev " + styles.splide__arrow
						}
					>
						<MdOutlineChevronRight />
					</button>
					<button
						className={
							"splide__arrow splide__arrow--next " + styles.splide__arrow
						}
					>
						<MdOutlineChevronRight />
					</button>
				</div>
			</Splide>
			<Text
				fontSize={"2.4rem"}
				fontFamily={"Segoe UI"}
				color={"#4B5563"}
				fontWeight={600}
				lineHeight={"3.9rem"}
				marginTop={"6.4rem"}
			>
				{text}
			</Text>
		</Container>
	);
}
