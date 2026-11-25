import { put, get } from "@vercel/blob";

export default async function handler(req, res) {
  const text = req.query.text;
  if (text) {
    await put("notes/latest.txt", text, { access: "private", allowOverwrite: true });
    return res.status(200).send("saved");
  }
  const file = await get("notes/latest.txt", { access: "private" });
  res.status(200).send(file ? await new Response(file.stream).text() : "empty");
}
