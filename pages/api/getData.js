export const arr = [];

export default function handler(req, res) {
  res.status(200).json(arr);
}
