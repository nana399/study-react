// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Result = {
  sum: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  res.status(200).json({ Result: req + req });
}
