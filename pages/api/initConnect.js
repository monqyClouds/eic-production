import clientPromise from "../../lib/mongodb"

const handler = async (req, res) => {
  if (req.method === "POST") {
    res.status(200).send();
    clientPromise;
  }
}

export default handler;