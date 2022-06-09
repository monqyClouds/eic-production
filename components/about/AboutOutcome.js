import { Container, Box, Heading, List, ListItem } from "@chakra-ui/react";

export default function AboutOutcome() {

  const outcomes = [
		"Boost national economic growth and development through SMEs.",
		"De-risk bankable projects through the training and opportunities provided by this Centre.",
    "Develop several growth-bound enterprises, based on the comprehensive level of support to be provided.",
    "Create jobs by training and supporting entrepreneurs through the provision of an entrepreneurial ecosystem to equip and support people with entrepreneurial skills.",
    "Develop entrepreneurs who can produce world-class solutions in the form of products and services and position Nigerian youth to take advantage of the opportunities presented by AfCFTA.",
    "Provide capacity-building opportunities that will lead to high-quality products and services that can be exported globally.",
    "Develop Business Management capacity to enhance the managerial, financial, and leadership skills of trainees."
	];

  return (
		<Container maxW={"1440px"} padding={"9.2rem 4rem"} centerContent>
			<Box
				maxWidth={"122rem"}
				padding={"7rem"}
				border={"2px solid #E1E1FE"}
				borderRadius={"1.6rem"}
				boxShadow={"0px 40px 40px -40px #083DA640"}
			>
				<Heading
					as={"h2"}
					fontSize={"4rem"}
					fontFamily={"Merriweather"}
					fontWeight={300}
					lineHeight={"4.8rem"}
					color={"#041749"}
					mb={"4.8rem"}
				>
					Expected Outcome
				</Heading>
        <List>
          {outcomes.map((outcome, index) => (
            <ListItem
              mb={"3.4rem"}
              pl={"2.8rem"}
              borderLeft={"4px solid #FF7A5C"}
              borderLeftRadius={"2px"}
              fontSize={"2.4rem"}
              fontWeight={400}
              lineHeight={"2.8rem"}
              fontFamily={"Segoe UI"}
              color={"#041749"}
              key={index}
            >
              {outcome}
            </ListItem>

          ))}
				</List>
			</Box>
		</Container>
	);
}