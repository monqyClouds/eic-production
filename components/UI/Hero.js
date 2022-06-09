import NextLink from "next/link";

import { Box, Container, Heading, Link, Text, Icon } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

// import styles from "./Hero.module.css";

export default function Hero({
	tagline,
	text,
	linkText,
	linkAddress,
	bgImage,
}) {
	return (
		<Container
			maxW={"2500px"}
			bgImage={bgImage}
			minH={"83.2rem"}
			maxH={"102.4rem"}
			padding={"0 4rem"}
			bgRepeat={"no-repeat"}
			bgPos={"center"}
			bgSize={"cover"}
			bgBlendMode={"normal"}
			pos={"relative"}
		>
			<Container maxW={"122.8rem"}>
				<Box
					minH={"28.4rem"}
					width={"auto"}
					maxW={"112rem"}
					pos={"absolute"}
					top={"22.7rem"}
					// left={"11.2rem"}
					display={"flex"}
					flexDirection={"column"}
					gap={"4.8rem"}
				>
					<Heading
						as={"h1"}
						fontSize={"6.4rem"}
						fontWeight={700}
						fontFamily={"Merriweather"}
						lineHeight={"8.96rem"}
						color={"#122867"}
					>
						{tagline}
					</Heading>
					{text && (
						<Text
							fontSize={"2.4rem"}
							fontFamily={"Segoe UI"}
							fontWeight={600}
							maxW={"79.5rem"}
							color={"#4B5563"}
						>
							{text}
						</Text>
					)}
					<NextLink href={linkAddress} passHref>
						<Link
							h={"5.6rem"}
							w={"17.6rem"}
							bgColor={"#FF7A5C"}
							borderRadius={"0.8rem"}
							fontSize={"1.8rem"}
							fontFamily={"Segoe UI"}
							fontWeight={"600"}
							color={"#2B0800"}
							display={"flex"}
							justifyContent={"center"}
							alignItems={"center"}
						>
							{linkText}
							<Icon as={BsArrowRightShort} ml=".5rem" />
						</Link>
					</NextLink>
				</Box>
			</Container>
		</Container>
	);
}
