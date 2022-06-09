import NextLink from "next/link";
import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import styles from "./BlogList.module.css";

import {
	Box,
	Container,
	Flex,
	Heading,
	IconButton,
	Link,
	Icon,
} from "@chakra-ui/react";

import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

export default function BlogList() {
	const blogs = [
		{
			title: "Dolor Sit Amet",
			imgSrc: "/images/DSC03475.jpg",
			imgAlt: "Director of LBS with director of EIC",
			date: "2nd January, 2022",
			content:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			categories: ["events", "business", "funding"],
			key: "blog-1",
		},
		{
			title: "Dolor Sit Amet",
			imgSrc: "/images/DSC_6775.JPG",
			imgAlt: "Director of LBS with director of EIC",
			date: "9th January, 2022",
			content:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			categories: ["events", "business", "funding"],
			key: "blog-2",
		},
		{
			title: "Dolor Sit Amet",
			imgSrc: "/images/DSC03578.jpg",
			imgAlt: "Director of LBS with director of EIC",
			date: "18 February, 2022",
			content:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			categories: ["events", "business", "funding"],
			key: "blog-3",
		},
		{
			title: "Dolor Sit Amet",
			imgSrc: "/images/DSC03601.jpg",
			imgAlt: "Director of LBS with director of EIC",
			date: "12th March, 2022",
			content:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			categories: ["events", "business", "funding"],
			key: "blog-4",
		},
		{
			title: "Dolor Sit Amet",
			imgSrc: "/images/DSC_6775.JPG",
			imgAlt: "Director of LBS with director of EIC",
			date: "4th April, 2022",
			content:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			categories: ["events", "business", "funding"],
			key: "blog-5",
		},
		{
			title: "Dolor Sit Amet",
			imgSrc: "/images/DSC03601.jpg",
			imgAlt: "Director of LBS with director of EIC",
			date: "8th May, 2022",
			content:
				"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
			categories: ["events", "business", "funding"],
			key: "blog-6",
		},
	];

	return (
		<section>
			<Container maxW="122rem" h="95rem" py="9rem" px="0" centerContent>
				<Heading
					as="h2"
					fontSize="4rem"
					fontFamily="Merriweather"
					mb="5.5rem"
					fontWeight={300}
					color="#122867"
				>
					Top News From The EIC
				</Heading>

				<Splide
					aria-label="Blog slider"
					hasTrack={false}
					options={{
						rewind: false,
						width: "122rem",
						perPage: 3,
						perMove: 1,
						gap: "3.2rem",
						drag: true,
						pagination: false,
					}}
				>
					<SplideTrack>
						{blogs.map((blog) => (
							<SplideSlide key={blog.key}>
								<Box
									maxW="38.4rem"
									mb="5.5rem"
									border="2px solid #E1E1FE"
									borderRadius="lg"
									overflow="hidden"
								>
									<Image
										src={blog.imgSrc}
										alt={blog.imgAlt}
										height={242}
										width={384}
									/>

									<Box py="6" px="1.6rem">
										<Box
											mt="1"
											// mb="1rem"
											fontWeight="300"
											as="h4"
											lineHeight="tight"
											noOfLines={1}
											fontSize="2.4rem"
											fontFamily="Merriweather"
											color="#122867"
										>
											{blog.title}
										</Box>

										<Box fontSize="1.2rem" fontWeight="600" color="#374151">
											{blog.date}
										</Box>

										<Box
											mt="1.6rem"
											noOfLines={3}
											fontSize="1.6rem"
											fontWeight="semilight"
											color="#374151"
										>
											{blog.content}
										</Box>
									</Box>
									<Flex
										textTransform="uppercase"
										gap="1.6rem"
										justify="flex-start"
										align="center"
										mb="1.6rem"
										px="1.6rem"
										fontSize="1.2rem"
										fontWeight="700"
										color="#4B5563"
									>
										{blog.categories.map(category => (
										<NextLink href={`/blogs?category=${category}`} passHref>
												<Link>{category}</Link>
										</NextLink>

										))}
									</Flex>
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

				<NextLink href="/blogs" passHref>
					<Link
						h={"5.2rem"}
						w={"24.8rem"}
						bgColor={"#FF7A5C"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
						fontSize={"1.8rem"}
						fontWeight={600}
						color={"#000719"}
					>
						View All Posts
						<Icon as={BsArrowRightShort} ml=".5rem" />
					</Link>
				</NextLink>
			</Container>
		</section>
	);
}
