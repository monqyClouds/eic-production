import Link from "next/link";

import { Container, Heading, Button, Icon } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

export default function ApplyCta() {
	return (
		<Container
			maxW={"5000px"}
			padding={"6.4rem 0"}
			bgColor={"#111827"}
			centerContent
		>
			<Heading
				as={"h2"}
				fontSize={"4rem"}
				fontFamily={"Merriweather"}
				fontWeight={300}
				lineHeight={"4.8rem"}
				color={"#FFFFFF"}
				mb={"4.8rem"}
			>
				Apply Today!
			</Heading>
			<Link href={"/admissions"} passHref>
				<Button
					bgColor="#FF7A5C"
					// variant={"solid"}
          h={"5.8rem"}
          w={"23rem"}
          borderRadius={".8rem"}
					color={"#000719"}
					fontSize={"1.8rem"}
					fontWeight={600}
					fontFamily={"Segoe UI"}
					lineHeight={"1.8rem"}
				>
					View Programmes <Icon as={BsArrowRightShort} ml=".5rem" />
				</Button>
			</Link>
		</Container>
	);
}
