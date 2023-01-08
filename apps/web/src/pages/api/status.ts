import type { NextApiRequest, NextApiResponse } from 'next';

interface ExtendNextRequest extends NextApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body: {
    httpStatus: string;
    errorMessage?: string;
  };
}

/**
 * It returns a JSON object with the key httpStatus and the value online if the request method is GET.
 * Otherwise, it returns a JSON object with the key errorMessage and the value Only Get Request is
 * accessible.
 * @param {ExtendNextRequest} req - ExtendNextRequest - This is the request object that Next.js
 * provides.
 * @param {NextApiResponse} res - NextApiResponse
 * @returns a promise.
 */
export default async function Status(
  req: ExtendNextRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return res.json({ httpStatus: 'online' });
  } else {
    return res.json({
      errorMessage: 'Only Get Request is accessible'
    });
  }
}
