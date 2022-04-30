import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
	const begin = performance.now();
	try {
		const response = await clientPromise;
		const db = response.db();
		const list = await db.collection("subscribedUsers").findOne({});
		if (req.method === "POST") {
			console.log({ list, completedIn: performance.now() - begin });

			res.status(200).json({ list });
		}
	} catch (err) {
		console.log({ err, completedIn: performance.now() - begin });
		res.status(400).send();
	}
};

export default handler;
