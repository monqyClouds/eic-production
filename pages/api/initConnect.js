import clientPromise from "../../lib/mongodb"

const handler = async (req, res) => {
  if (req.method === "POST") {
    clientPromise;
    res.status(200);
  }
}

export default handler;