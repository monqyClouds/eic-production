import Link from "next/link";


export default function HomeEventListItem({event}) {
  return (
		<li>
			<h3>{event.title}</h3>
			<h4>{event.date}</h4>
			<Link href={`/blogs/id?slug=${event.slug}`}>
				<a>View Details</a>
			</Link>
		</li>
	);
}