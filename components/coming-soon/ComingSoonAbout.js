import Image from "next/image";

import classes from "./ComingSoonAbout.module.css";

export default function ComingSoonAbout() {
	return (
		<section className={classes.about}>
			<div className={classes.aboutImage}>
				<Image
					src="/images/aboutImage.jpg"
					srcSet="
            ../../public/images/aboutImage.jpg 768w, 
          "
					alt="about-section image"
					className={classes.aboutImageDesktop}
					layout="responsive"
					width={520}
					height={768}
					objectFit="contain"
					objectPosition="top center"
					sizes="(max-width: 600) 309px, 768px"
				/>
				<Image
					src="/images/aboutImageCollage-mobile.jpg"
					alt="about section image"
					height={310}
					width={343}
					objectFit="contain"
					className={classes.aboutImageMobile}
				/>
			</div>
			<div className={classes.aboutContent}>
				<h1>About Us</h1>
				<div className={classes.aboutContentText}>
					<p>
						Entrepreneurship Innovation Centre (EIC) is aimed at job creation,
						significant improvement of SME success and the establishment of more
						impact driven businesses.
					</p>
					<p>
						The Centre provides high quality entrepreneurship and business
						management training as well as empowerment to young Nigerians across
						the six geo-political zones of the country. The Centre also provides
						an ecosystem to support and enhance the technical, managerial,
						financial and leadership skills of entrepreneurs across the country.
					</p>

					<p>
						EIC is an initiative of LBS Nigeria in partnership with the BOI
						Nigeira to train the next generation of African entrepreneurs and
						provide them with funding and market opportunities
					</p>
				</div>
				<div className={classes.aboutContentIcons}>
					<a href="https://www.facebook.com/Eicnigeriaa/" target={"_blank"}>
						<img
							src="/icons/Facebook.svg"
							srcSet="
                /icons/Facebook-32px.svg 32w,
                /icons/Facebook.svg 48w, 
              "
							alt="facebook Logo"
							layout="fill"
							sizes="(max-width: 600px) 32px, 48px"
							className={classes.icon}
						/>
					</a>

					<a
						href="https://twitter.com/eicnigeria?t=Pt0glMW1u8JZcc6W1j935w&s=09"
						target={"_blank"}
					>
						<img
							src="/icons/twitter.svg"
							srcSet="
                /icons/twitter-32px.svg 32w,
                /icons/twitter.svg 48w
              "
							alt="twitter Logo"
							layout="fill"
							sizes="(max-width: 600px) 32px, 48px"
							className={classes.icon}
						/>
					</a>
					<a
						href="https://www.linkedin.com/company/eicnigeria/"
						target={"_blank"}
					>
						<img
							src="/icons/Linkedin.svg"
							alt="Linkedin Logo"
							layout="fill"
							srcSet="
                /icons/Linkedin-32px.svg 32w,
                /icons/Linkedin.svg 48w
              "
							sizes="(max-width: 600px) 32px, 48px"
							className={classes.icon}
						/>
					</a>
					<a
						href="https://instagram.com/eicnigeria?igshid=YmMyMTA2M2Y="
						target={"_blank"}
					>
						<img
							src="/icons/instagram.svg"
							srcSet="
                /icons/instagram.svg 48w
              "
							// height={40}
							// width={40}
							alt="Instagram Logo"
							layout="fill"
							sizes="(max-width: 600px) 28px, 42px"
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
