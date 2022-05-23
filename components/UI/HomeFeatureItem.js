import Image from "next/image";

import styles from "./HomeFeatureItem.module.css";

export default function HomeFeatureItem({ feature }) {
	return (
		<div className={styles.featureItem}>
			<div className={styles.featureImage}>
				<Image
					src={feature.image.src}
					alt={feature.image.alt}
					width={736}
					height={386}
				/>
			</div>
			<div className={styles.featureText}>
				<h3>{feature.title}</h3>
				<p>{feature.text}</p>
			</div>
		</div>
	);
}
