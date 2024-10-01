// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  sum: number;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // クエリパラメータとして数値を受け取る
  const { num1, num2 } = req.query;

  // num1とnum2が存在しない、または数値でない場合のエラーハンドリング
  if (!num1 || !num2 || isNaN(Number(num1)) || isNaN(Number(num2))) {
    res.status(400).json({ sum: 0, message: "無効な数値です。" });
    return;
  }

  // 数値に変換し、合計を計算
  const sum = Number(num1) + Number(num2);

  // 合計結果を返す
  res.status(200).json({ sum, message: "計算が成功しました。" });
}
