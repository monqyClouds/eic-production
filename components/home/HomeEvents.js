import HomeEventListItem from "../UI/HomeEventListItem";
import styles from "./HomeEvents.module.css";

export default function HomeEvents() {
	const events = [
		{
			title: "Capacity Building Exercise",
			date: "2nd August 2021",
			slug: "capacity-building-exercise-1",
		},
		{
			title: "Seminar for winning",
			date: "2nd August 2021",
			slug: "capacity-building-exercise-2",
		},
		{
			title: "Capacity Building Exercise",
			date: "2nd August 2021",
			slug: "capacity-building-exercise-3",
		},
		{
			title: "Capacity Building Exercise",
			date: "2nd August 2021",
			slug: "capacity-building-exercise-4",
    },
    {
			title: "Capacity Building Exercise",
			date: "2nd August 2021",
			slug: "capacity-building-exercise-5",
		},
	];

	return (
		<section className={styles.sectionEvents}>
			<div className={styles.eventsContainer}>
				<h2>Upcoming Events</h2>
        <div>
          <div className={styles.listShadow}>
					<ul className={styles.eventList}>
						{events.map((event) => (
							<HomeEventListItem key={event.slug} event={event} />
						))}
					</ul>

          </div>
				</div>
			</div>
		</section>
	);
}
