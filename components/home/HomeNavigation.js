import NextLink from "next/link";
import { Container, Link, List, ListItem } from "@chakra-ui/react";

function HomeNavigation() {
	return (
		<Container
			maxW="300rem"
			pos={"absolute"}
			top="0"
			left="0"
			height="12.8rem"
			bgColor={"transparent"}
			margin={"0, auto"}
		>
			<List
				h={"100%"}
				w={"80rem"}
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
				color="#122867"
				fontWeight={600}
				fontSize={"1.8rem"}
				lineHeight={"2.8rem"}
				fontFamily="Segoe UI"
        margin={"0 auto"}
        textAlign="center"
			>
				<ListItem>
					<NextLink href="/about" passHref>
						<Link>About</Link>
					</NextLink>
				</ListItem>

				<ListItem>
					<NextLink href="/admissions" passHref>
						<Link>Admissions & Applications</Link>
					</NextLink>
				</ListItem>

				<ListItem>
					<NextLink href="/contact" passHref>
						<Link>Contact Us</Link>
					</NextLink>
				</ListItem>

				<ListItem>
					<NextLink href="/blog" passHref>
						<Link>News</Link>
					</NextLink>
				</ListItem>
			</List>
		</Container>
	);
}

export default HomeNavigation;
