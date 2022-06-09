import Link from "next/link";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	Flex,
	Container,
	Icon,
	Heading,
	Center,
} from "@chakra-ui/react";
import { BiCaretRight } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";



export default function FAQ() {

  const faqs = [
    {
      id: 1,
			title: "Are these programmes accredited?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
    {
      id: 2,
			title: "Will I receive a certificate upon completion?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
    {
      id: 3,
			title: "How is the tuition structure?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
      id: 4,
			title: "Will I have access to mentorship?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	];

	return (
		<Container maxW={"600rem"} bgColor="#111827">
			<Container maxW="122rem" py="11.2rem" px="0" color={"#ffffff"}>
				<Flex w="100%" direction={"column"} align="center">
					<Heading
						as="h2"
						fontSize={"4rem"}
						fontWeight="300"
						fontFamily={"Merriweather"}
						mb="9rem"
					>
						FAQ
					</Heading>
          <Accordion allowToggle w="100%" border="0" mb="9rem">
            {faqs.map(faq => (
              <AccordionItem mb="3rem" border="0" key={faq.id}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        border="0"
                        fontSize="2xl"
                        fontWeight="bold"
                        _focus={{ border: "0" }}
                      >
                        <Icon
                          as={BiCaretRight}
                          color="#FF7A5C"
                          transform={isExpanded ? "rotate(90deg)" : "rotate(0)"}
                          transition="transform .3s"
                        />
                        <Box
                          flex="1"
                          textAlign="left"
                          ml={"2rem"}
                          fontSize="2.4rem"
                          fontWeight={600}
                        >
                          {faq.title}
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="2xl">
                      {faq.content}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
					</Accordion>
					<Box w="25rem" display="flex" flexDirection="column">
						<Heading
							as="h3"
							fontSize="3.2rem"
							fontWeight="600"
							color="#f5f5ff"
							mb="3rem"
						>
							More Questions?
						</Heading>
						<Link href="/contact" passHref>
							<Center bg="transparent" h="5.6rem" color="#FF7A5C" fontSize="1.8rem" border={"2px solid #FF7A5C"} borderRadius={"0.8rem"} fontWeight="600" cursor="pointer">
								Contact Us
								<Icon as={BsArrowRightShort} ml=".5rem"/>
							</Center>
						</Link>
					</Box>
				</Flex>
			</Container>
		</Container>
	);
}
