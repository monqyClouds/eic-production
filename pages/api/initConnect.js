import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
	// const begin = performance.now();
	try {
		const client = await clientPromise;
		const db = client.db();
		const list = await db.collection("subscribedUsers").findOne({});
		if (req.method === "POST") {
      // const completedIn = performance.now() - begin;
			console.log({ list });

			res.status(200).json({ list });
		}
	} catch (err) {
		console.log({ err, completedIn: performance.now() - begin });
		res.status(400).send();
	}
};

export default handler;
