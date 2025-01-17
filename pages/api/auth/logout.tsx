import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
export default function logoutHandler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const cookie = serialize("session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);
  res.status(200).json({ message: "Logout successful" });
}
