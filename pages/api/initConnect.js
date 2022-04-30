import clientPromise from "../../lib/mongodb"

const handler = async (req, res) => {
  await clientPromise;
  if (req.method === "POST") {
    res.status(200).send();
  }
}

export default handler;