import clientPromise from "../../lib/mongodb"

const handler = async (req, res) => {
  const response = await clientPromise;
  const db = response.db();
  const coll = db.collections("subscribedUsers");
  if (req.method === "POST") {
    res.status(200).json({coll});
  }
}

export default handler;