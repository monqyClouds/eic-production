import Image from "next/image";
import { Container, Box, Text } from "@chakra-ui/react";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

export default function AboutGallery() {
	const gallerySlides = [
		{
			imageSrc: "/images/about-gallery-1.jpg",
			imageText:
				"The Entrepreneurship Innovation Centre (EIC) is a collaborative project between Lagos Business School (LBS) and the Bank of Industry (BOI).",
		},
		{
			imageSrc: "/images/about-gallery-2.jpg",
			imageText:
				"The Centre is intended to provide high-quality entrepreneurship and business management training nationwide and will include capacity-building services, as well as an ecosystem to support and enhance the technical managerial, financial, and leadership skills of entrepreneurs across Nigeria.",
		},
		{
			imageSrc: "/images/about-gallery-3.jpg",
			imageText:
				"The program aims to build profitable business initiatives aimed at solving problems and transforming lives.",
		},
		{
			imageSrc: "/images/about-gallery-4.jpg",
			imageText:
				"This will consequently accelerate the transformation of society, empower people financially, alleviate poverty, create jobs and ultimately create wealth, while boosting national socio-economic development.",
		},
	];
	return (
		<Container
			maxW={"1440rem"}
			margin={"12.8rem auto"}
			padding={"0 4rem"}
			centerContent
		>
			<Splide
				aria-label="about gallery"
				hasTrack={false}
				options={{
					rewind: true,
					width: "100%",
					type: "fade",
					perPage: 1,
					perMove: 1,
					autoplay: true,
					drag: true,
					pagination: false,
					pauseOnFocus: true,
					pauseOnHover: true,
				}}
			>
				<SplideTrack>
					{gallerySlides.map((slide, index) => (
						<SplideSlide key={index}>
							<Box pos={"relative"}>
								<Image
									height={768}
									width={1228}
									src={slide.imageSrc}
									alt={"A part of LBS"}
								/>
								<Box
									w={"100%"}
									h={"100%"}
									bgColor="rgba(4, 23, 73, 0.65)"
									position={"absolute"}
									top={0}
									left={0}
									padding={"7rem"}
									display={"flex"}
									alignItems={"flex-end"}
								>
									<Text
										fontSize={"2.4rem"}
										fontFamily={"Segoe UI"}
										fontWeight={400}
										lineHeight={"3.9rem"}
										color={"#F5F5FF"}
										w={"107rem"}
									>
										{slide.imageText}
									</Text>
								</Box>
							</Box>
						</SplideSlide>
					))}
				</SplideTrack>
			</Splide>
		</Container>
	);
}
