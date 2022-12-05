// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const arr = [];

export default function handler(req, res) {
  const body = req.body;
  arr.push(body);

  // console.log("body", body);

  res.status(200).json(arr);
}
