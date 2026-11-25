export default function handler(req, res) {
  console.log("tick at", new Date().toISOString());
  res.status(200).send("tick");
}

