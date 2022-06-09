import { Container, Text } from "@chakra-ui/react";

export default function HomeIntro() {
	return (
		<Container maxW={"122.8rem"} margin={"10rem auto"}>
			<Text
				fontSize={"2.4rem"}
				fontFamily={"Segoe UI"}
				color={"#374151"}
				fontWeight={600}
			>
				Lagos Business School (LBS) in collaboration with the Bank of Industry
				(BOI) established the Entrepreneurship Innovation Centre (EIC), with the
				aim of providing high-quality entrepreneurship training and empowerment
				to young Nigerians across the six geopolitical zones of the country.{" "}
				<br />
				Unemployment has reached unacceptable levels for the Nigerian economy to
				remain safe. Over the years, youth unemployment, has been rising and
				this has led to rising insecurity, social vices, slow economic growth,
				inflation and other attendant hardships. <br />
				The BOI-LBS Entrepreneurship Innovation Centre is therefore intended to
				boost job creation, significantly improve SME business success and
				reduce loan default rates due to business failure. The Centre will also
				provide an ecosystem to support and enhance the technical, managerial,
				financial, and leadership skills of entrepreneurs across Nigeria.
			</Text>
		</Container>
	);
}
