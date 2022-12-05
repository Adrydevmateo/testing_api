import { arr } from "./getData";

export default function handler(req, res) {
  const body = req.body;
  arr.push(body);

  // console.log("body", body);

  res.status(200).json(arr);
}
