import clientPromise from "../../lib/mongodb"

const handler = async (req, res) => {
  try { 
    const response = await clientPromise;
		const db = response.db();
		const coll = db.collections("subscribedUsers");
		const list = await coll.find();
		if (req.method === "POST") {
			res.status(200).json(list);
		}
  } catch (err) {
    res.status(400).send();
  }
  
}

export default handler;