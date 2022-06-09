import { Container, Heading, Box, Text, Icon } from "@chakra-ui/react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

import "@splidejs/react-splide/css";
import styles from "../UI/BlogList.module.css";

export default function AboutTraining() {
	const trainings = [
		{
			title: "Entrepreneurship orientation and Business Management training",
			duration: "3 months",
		},
		{
			title: "Technical training for skill acquisition & capacity building ",
			duration: "6 - 12 months",
			durationText: "(Varies with skill learnt & level of expertise)",
		},
		{
			title: "Apprenticeship/business incubation: ",
			subtitle: "Learn to apply the skill in the context of a business.",
			duration: "6 - 12 months",
		},
		{
			title: "Access to markets and funding:",
			subtitle:
				"Platforms (online and offline) to trade with wider markets and provide funding through BOI.",
			duration: "6 - 12 months",
		},
	];

	return (
		<Container maxW={"126rem"} padding={"12.8rem 4rem"} fontFamily={"Segoe UI"}>
			<Heading
				as={"h2"}
				fontSize={"4rem"}
				fontWeight={300}
				fontFamily={"Merriweather"}
				color={"#122867"}
				mb={"6rem"}
			>
				Training Stages
			</Heading>

			<Splide
				aria-label="Blog slider"
				hasTrack={false}
				options={{
					rewind: false,
					width: "100%",
					perPage: 2,
					perMove: 1,
					gap: "4.2rem",
					drag: true,
					pagination: false,
				}}
			>
				<SplideTrack>
					{trainings.map((training, index) => (
						<SplideSlide key={index}>
							<Box
								width={"calc(100% - 2.1rem)"}
								maxWidth={"56.5rem"}
								height={"25.6rem"}
								padding={"3rem"}
								mb={"6rem"}
								display={"flex"}
								flexDir={"column"}
								justifyContent={"space-between"}
								bgColor={"#E1E1FE"}
								border={"2px solid #C3C4FE"}
								borderRadius={"1.6rem"}
								key={index}
							>
								<Box>
									<Heading
										as={"h5"}
										fontSize={"2.4rem"}
										fontStyle={600}
										lineHeight={"3.2rem"}
										color={"#122867"}
										mb={"1rem"}
									>
										{training.title}
									</Heading>
									{training.subtitle && (
										<Heading
											as={"h6"}
											fontSize={"1.6rem"}
											fontWeight={400}
											color="#1F2937"
										>
											{training.subtitle}
										</Heading>
									)}
								</Box>
								<Box>
									<Text fontSize={"1.6rem"} fontWeight={600} color={"#122867"}>
										DURATION:{" "}
										{training.durationText && (
											<Text
												as={"span"}
												fontStyle={"italic"}
												fontWeight={"normal"}
												fontSize={"1.4rem"}
											>
												{training.durationText}
											</Text>
										)}
									</Text>
									<Text fontSize={"4rem"} fontWeight={600} color={"#374151"}>
										{training.duration}
									</Text>
								</Box>
							</Box>
						</SplideSlide>
					))}
				</SplideTrack>

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
				fontSize="2rem"
        fontWeight={400}
        lineHeight={"3.9rem"}
				color={"#1F2937"}
				bgColor={"#FFFFFF"}
				border={"2px solid #E1E1FE"}
				borderRadius={"1.6rem"}
				boxShadow={"0px 40px 40px -40px #083DA640"}
        padding={"7.2rem"}
        mt={"10rem"}
			>
				These four phases are intended to comprehensively provide everything an
				entrepreneur needs to succeed. While most entrepreneurship training
				tends to focus on just one or two of these stages. We have chosen to
				provide all four phases to ensure the participants are groomed into
				entrepreneurs who can operate profitable and sustainable businesses
				within Nigeria, Africa and across the globe. The Programme will produce
				a new breed of innovative and problem-solving entrepreneurs who can
				transform society and revamp the national economy through the
				commercialisation of their solutions globally.
			</Text>
		</Container>
	);
}
