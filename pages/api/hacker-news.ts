// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getTopNews } from '../../lib/top-hacker-news';
import { INews } from '../../lib/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<INews[]>
) {
  const items = await getTopNews();
  res.status(200).json(items);
}
