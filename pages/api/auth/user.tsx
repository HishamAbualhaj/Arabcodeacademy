import { decrypt } from '@/app/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const cookie = req.headers.cookie;

  if (!cookie) {
    return res.status(401).json({ message: "Not logged in" });
  }

  const session = cookie
    .split("; ")
    .find((row) => row.startsWith("session="))
    ?.split("=")[1];

  if (!session) {
    return res.status(401).json({ message: "Invalid session" });
  }

  try {
    const userData = decrypt(session);
    res.status(200).json({ user: userData });
  } catch (error) {
    res.status(500).json({ message: "Failed to decrypt session" });
  }
}
