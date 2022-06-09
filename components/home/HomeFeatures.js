import Image from "next/image";
import {
	Box,
	Container,
	Heading,
	List,
	ListIcon,
	ListItem,
	Flex,
	Text,
} from "@chakra-ui/react";

import { GoPrimitiveDot } from "react-icons/go";

export default function HomeFeature() {
	const features = [
		{
			title: "Entrepreneurship and Business Management Training",
			text: "This phase of the programme introduces participants to entrepreneurship essentials and Business Management. Curriculum content will include:",
			image: {
				src: "/images/feature-1.jpg",
				alt: "a lady talking to a man",
				height: 645,
				width: 592,
			},
			list: [
				{
					text: "Understanding the essence of Entrepreneurship",
					key: 1,
				},
				{
					text: "Entrepreneurial Leadership",
					key: 2,
				},
				{
					text: "Business ethics and etiquette",
					key: 3,
				},
				{
					text: "Learning to identify and assess opportunities",
					key: 4,
				},
				{
					text: "How to turn an idea into a business opportunity",
					key: 5,
				},
				{
					text: "How to start a business with scarce resources",
					key: 6,
				},
				{
					text: "How to start and run a successful and sustainable business",
					key: 7,
				},
				{
					text: "How to manage financial records/cash flow projections",
					key: 8,
				},
				{
					text: "How to  build and inspire a committed team; Marketing and Branding",
					key: 9,
				},
			],
			key: "feature-1",
		},
		{
			title: "Technical Training and Capacity Building",
			text: "This entails capaity building and skill acquisition of the participants to ensure they produce high-quality exportable products or services and enable them grow and scale. Construction skill, Tailoring, Furniture making, Automotive-repair and driving, Leather works, Confectionary/hospitality, Agribusiness, Bead making, Coding/App development (6 months - 1 year depending on the type)",
			image: {
				src: "/images/feature-2.jpg",
				alt: "A lady sewing cloth",
				height: 480,
				width: 592,
			},
			key: "feature-2",
		},
		{
			title: "Apprenticeship and Mentorship Opportunity",
			text: "The participants get firsthand experience of how their skills are applied in abusiess. It ultimately helps them hit the ground running when they eventually start a busines independently, depending on prior experience levels and certification of business readiness",
			image: {
				src: "/images/feature-3.jpg",
				alt: "A group of people discussing",
				height: 480,
				width: 592,
			},
			key: "feature-3",
		},
		{
			title: "Access to Markets and Funding",
			text: "The Centre will provide opportunities for the participants to get their product and services out the market. This phase is aimed at facilitating access to markets by providing both onine and brick & mortar platforms for retail, whole and exports. At this point the participants are fund-ready and can be safely given loans. Condition for funding will include being subject to a Board to mentor and monitor the use of funds for at least one year. Once the locan is repaid, they are free to leave the programme completely and operate independently",
			image: {
				src: "/images/feature-4.jpg",
				alt: "people shaking each others hands",
				height: 480,
				width: 592,
			},
			key: "feature-4",
		},
	];

	return (
		<Container maxW="6000rem" bgColor={"#F5F5FF"}>
			<Container
				maxW="122rem"
				py="12.8rem"
				px="0"
				color={"#111827"}
				// centerContent
			>
				<Heading
					as="h2"
					fontSize={"4.4rem"}
					fontWeight={400}
					color={"#374151"}
					fontFamily={"Merriweather"}
					textAlign={"left"}
				>
					Scope
				</Heading>

				<Heading
					as="h4"
					fontSize={"2.4rem"}
					fontWeight={600}
					fontFamily={"Segoe UI"}
					color={"#374151"}
					lineHeight={"3.9rem"}
					margin={"3.2rem 0"}
					textAlign={"left"}
				>
					The training is expected to be achieved in four stages
				</Heading>

				<Text color={"#374151"} fontSize={"2.4rem"} mb={"12rem"}>
					<Heading as={"h6"} display={"inline-block"}>
						Stage I:
					</Heading>{" "}
					Entrepreneurship orientation and Business Management training
					(Duration: 3 months)
					<br />
					<Heading as={"h6"} display={"inline-block"}>
						Stage II:
					</Heading>{" "}
					Technical training for skill acquisition/capacity building (Duration
					will depend on the type of skill being learnt and the level of
					expertise (6mths-1 year) <br />
					<Heading as={"h6"} display={"inline-block"}>
						Stage III:
					</Heading>{" "}
					Apprenticeship/business incubation: Learn to apply the skill in the
					context of a business (6mths-1 year) <br />
					<Heading as={"h6"} display={"inline-block"}>
						Stage IV:
					</Heading>{" "}
					Access to markets and funding: Platforms (online and offline) to trade
					with wider markets and provide funding through BOI, where required (1
					year max). <br />
					<br />
					These four phases are intended to comprehensively provide everything
					an entrepreneur needs to succeed.
				</Text>

				{features.map((feature, i) => (
					<Flex
						justify={"space-between"}
						mb={"12rem"}
						direction={i % 2 === 1 ? "row-reverse" : "row"}
						gap={"3.2rem"}
						key={feature.key}
					>
						<Box flexBasis={"50%"}>
							<Heading
								as={"h3"}
								fontSize={"3.6rem"}
								fontFamily={"Merriweather"}
								fontWeight={300}
								color={"#122867"}
								mb={"4.8rem"}
							>
								{feature.title}
							</Heading>
							<Text fontSize={"2rem"}>
								{feature.text}

								{feature.list && (
									<List mt={"3rem"}>
										{feature.list.map((item) => (
											<ListItem display={"flex"} key={item.key}>
												<ListIcon
													as={GoPrimitiveDot}
													color={"#FF7A5C"}
													fontSize={"0.8rem"}
													display={"inline-block"}
													mt={"1.2rem"}
													mr={"1.6rem"}
												/>
												{item.text}
											</ListItem>
										))}
									</List>
								)}
							</Text>
						</Box>
						<Box>
							<Image
								src={feature.image.src}
								alt={feature.image.alt}
								width={feature.image.width}
								height={feature.image.height}
							/>
						</Box>
					</Flex>
				))}
			</Container>
		</Container>
	);
}
