import {
	Box,
	Center,
	Flex,
	Heading,
	Button,
	ButtonGroup,
	Link,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import styles from "./HomeHero.module.css";
import HomeNavigation from "./HomeNavigation";

export default function HomeHero({ tagline, text }) {
	return (
		<section className={styles.heroSection}>
			<HomeNavigation />

			<Flex direction={"column"} justify="space-between" align={"center"}>
				<Box
					display={"flex"}
					flexDirection="column"
					justifyContent={"space-between"}
					alignItems="center"
					h={"24.8rem"}
					marginBottom={"8.2rem"}
					marginTop={"14rem"}
				>
					<Box marginBottom={"6rem"}>
						<Image
							src="/images/EIC-logo-hero.png"
							alt="EIC Logo"
							width={263}
							height={210}
						/>
					</Box>
					<Flex w={"57.6rem"} justify={"space-between"} align="center">
						<Box w={"50%"}>
							<Image
								src="/images/LBS-logo-hero.png"
								alt="LBS logo"
								height={66}
								width={213}
							/>
						</Box>
						<Box w={"50%"}>
							<Image
								src="/images/BOI-logo-hero.png"
								alt="LBS logo"
								height={76}
								width={340}
							/>
						</Box>
					</Flex>
				</Box>
				<Box marginTop={"8.2rem"}>
					<Heading
						as="h1"
						w={"112rem"}
						h={"12.8rem"}
						textAlign={"center"}
						fontFamily="Merriweather"
						fontSize={"5.4rem"}
						fontWeight={400}
						color={"#122867"}
						marginBottom={"4.8rem"}
					>
						Developing Impact-driven entrepreneurs for national transformation
					</Heading>
					<Flex
						width={"36.8rem"}
						justify={"space-between"}
						align={"center"}
						margin={"0 auto"}
					>
						<NextLink href={"/admissions"} passHref>
							<Link
								fontSize={"1.8rem"}
								fontWeight={600}
								bgColor={"#FF7A5C"}
								color={"#2B0800"}
								width={"18rem"}
								height={"5.6rem"}
								borderRadius={"5px"}
								textAlign="center"
								display={"flex"}
								justifyContent="center"
								alignItems={"center"}
							>
								Apply Now
							</Link>
						</NextLink>
						<NextLink href={"/about"} passHref>
							<Link
								fontSize={"1.8rem"}
								fontWeight={600}
								bgColor={"transparent"}
								borderColor={"#FF7A5C"}
								borderWidth={"2px"}
								borderStyle={"solid"}
								borderRadius={"5px"}
								color={"#2B0800"}
								width={"18rem"}
								height={"5.6rem"}
								textAlign="center"
								display={"flex"}
								justifyContent="center"
								alignItems={"center"}
							>
								Learn More
							</Link>
						</NextLink>
					</Flex>
				</Box>
			</Flex>
		</section>
	);
}
