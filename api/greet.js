export default function handler(req,res){
  res.status(400).send(process.env.GREETING || "no greeting set");
}
