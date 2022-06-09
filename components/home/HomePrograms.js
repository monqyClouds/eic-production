import Link from "next/link";
import { Icon } from "@chakra-ui/react";

import styles from "./HomePrograms.module.css";
import { BsArrowRightShort } from "react-icons/bs";

export default function HomePrograms({theme}) {
	return (
		<section className={styles.applyCta}>
			<h2>Apply Today!</h2>
			<Link href="/admissions">
				<button>
					View Programmes
					<Icon as={BsArrowRightShort} ml=".5rem" />
				</button>
			</Link>
		</section>
	);
}
