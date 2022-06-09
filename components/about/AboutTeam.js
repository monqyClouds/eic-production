import { Container, Heading, Avatar, Box, Text } from "@chakra-ui/react";

export default function AboutTeam() {
	const members = [
		{
			imgSrc: "/images/henrietta.jpg",
			name: "Henrietta Onwuegbuzie PhD",
			title: "Director, Entrepreneurship Innovation Centre",
			bio: "Dr Henrietta Onwuegbuzie is passionate about economic development and social transformation in Nigeria and Africa, and has initiated the creation of over 100 profitable, social impact businesses through the MBA and Executive programmes at LBS. | Onwuegbuzie is a certified Management consultant and leads sessions in Entrepreneurship on the MBA and Executive programmes at Lagos Business School (LBS). She was recently conferred the Excellence award in Entrepreneurship and Impact Investing, and is currently the Director of the Entrepreneurship and Innovation Centre and Project Director for the Impact Investing policy initiative at LBS.",
		},
		{
			imgSrc: "/images/nike.png",
			name: "Morenike Richie-Ogbodu",
			title: "Center Manager",
			bio: "Morenike has over 20+ years experience in business and project management in several sectors spanning -  Financial Services, Consumer goods and Enterprise software sales. She has a strong history of driving dynamic product sales, managing client relationships, and positively impacting revenues. | She is a lawyer and a Business Development Manager. Over the past few years she has served as faculty and been involved in the management of grants for training and skill acquisition programmes for Entrepreneurs in Nigeria. Morenike is facilitator for collaborator and works to achieve a win-win for partnerships. She is a certified Project Manager and is pursuing a certification in Business Analysis.  Morenike believes strongly in impacting lives through education (albeit formal or vocational) and serves as a Trustee on the board of Sponsor A Child Through School Foundation (SACTS). She is an alumni of the Lagos Business School and the Enterprise Development Center.",
		},
		{
			imgSrc: "/images/ola.png",
			name: "Olayode Agboola",
			title: "Research Fellow",
			bio: "Olayode holds a PhD in Economics from Obafemi Awolowo University, with strong skills in economic modelling, research and data analysis and a Post-Graduate Diploma in Education (PGDE) from the National Open University of Nigeria, with strong teaching, mentoring and educational management skills. He has also undertaken several online courses, including the Investment Foundations Programme of the CFA Institute; Entrepreneurship in Emerging Economies of Harvard University; and Community Engagement: Collaborating for Change of the University of Michigan. | As a team player with excellent work ethics and sound interpersonal relations, Olayode has many years of experience as a teacher, lecturer, marketing executive and corporate strategist. He has taught, inspired and mentored several learners at the elementary, secondary and post-secondary school stages, with at least 80% of his students recording grades ranging from A* to B while the rest never got lower than a C grade, especially in Cambridge Advanced Level Economics examinations. More recently, he has worked as a Post-Doctoral Research Fellow at the Nigerian Institute of Social and Economic Research (NISER). He currently works as a Post-Doctoral Research Fellow at the Entrepreneurship Innovation Centre (EIC) of Lagos Business School, Pan-Atlantic University, Lagos, Nigeria. | Olayode is an innovative, resourceful and result-oriented economist, an exceptional scholar with strong research interests in the areas of innovations in entrepreneurship, finance, energy and human capital development towards attaining sustainable development. He has published in both local and international journals on entrepreneurship education, entrepreneurship education curriculum, energy and CO2 emissions, and financial intermediation. He is on a career mission to develop a theory of change based on the community enterprise framework for the optimisation of human potentials of productivity and charity within and outside organizations and communities. He is a member of the United Nations Economic Commission for Africa (UNECA)’s Young Economists Network (ECA-YEN).",
		},
		{
			imgSrc: "/images/greg.png",
			name: "Gregory Asiegbu",
			title: "Programme Manager",
			bio: "Gregory has Six years of experience in Business Development and Research, although with a background in Petroleum Engineering, He has developed kin interest for entrepreneurship and management research. Gregory currently works at the Lagos Business School’s Entrepreneurship Innovation Centre where he is the programme coordinator. | His continues drive for impact has led him to be part of several initiatives and projects. He was a founding team member of Leadership Challenge Foundation a Nonprofit in Nigeria bridging the skill gap of vocational education in Nigeria, He is a Co-founder of DigitalSME a start-up committed to connecting Nigeria’s entrepreneurial ecosystem to support the growth of SMEs through technology, and a partner at SURE-MAT Visual Perception an art and aesthetics company. | Gregory was a scholar at the African 1millionteachers project, an alumnus of the Lagos Business School Young Talent Program, Tekedia institute and Mckinsey forward program. He was a participant at the Global Startup Ecosystem (GSE) Accelerator, Atlas Corp Virtual Leadership Institute, and a fellow at EWOR - Europe’s first founder education. | Through his work on several research projects, he has developed strong abilities in research, consulting, and product management. Gregory is a reviewer of an international journal, and has made literal contributions to journal articles, technical notes, book chapters, conference papers. He is an excellent communicator, leader, and team member. Gregory’s interest lies in Entrepreneurship and digital innovations and has a strong passion for youth empowerment.",
		},
	];

	return (
		<Container maxW={"1440px"} padding={"12.8rem 4rem 4.8rem"} centerContent>
			<Heading
				as={"h2"}
				fontSize={"4rem"}
				fontWeight={400}
				lineHeight={"4.8rem"}
				fontFamily={"Merriweather"}
				color={"#122867"}
				textAlign={"center"}
				mb={"25.6rem"}
			>
				Meet The Team
			</Heading>
			{members.map((member, index) => (
        <Box
          key={index}
					maxW={"80rem"}
					padding={"0 3rem 8rem"}
					mb={"25.6rem"}
					fontFamily={"Segoe UI"}
					textAlign={"center"}
					border={"2px solid #E1E1FE"}
					borderRadius={"1.6rem"}
					boxShadow={"0 40px 40px -40px #083DA6"}
				>
					<Avatar
            h={"25.6rem"}
            w={"25.6rem"}
						name={member.name}
            src={member.imgSrc}
            // mb={"4.8rem"}
            transform={"translateY(-50%)"}
					/>
					<Heading
						as={"h4"}
						fontSize={"2.8rem"}
						fontWeight={400}
						lineHeight={"3.6rem"}
						fontFamily={"Merriweather"}
						color={"#122867"}
            textAlign={"center"}
            mt={"-4.8rem"}
					>
						{member.name}
					</Heading>
					<Heading
						as={"h6"}
						fontSize={"2rem"}
						fontWeight={600}
						lineHeight={"3.6rem"}
						color={"#122867"}
						textAlign={"center"}
						mb={"4.8rem"}
					>
						{member.title}
          </Heading>
          {member.bio.split("|").map((text, indx) => (
					<Text
						fontSize={"1.8rem"}
						fontWeight={400}
						lineHeight={"2.8rem"}
            color={"#374151"}
              textAlign={"left"}
              mb={"2rem"}
            key={indx}
					>
						{text}
					</Text>
          ))}
				</Box>
			))}
		</Container>
	);
}
