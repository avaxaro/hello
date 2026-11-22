export default function handler(req,res){
  res.status(200).send(process.env.GREETING || "no greeting set");
}
