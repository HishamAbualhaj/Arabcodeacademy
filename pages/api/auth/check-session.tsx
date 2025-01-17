import { parse } from "cookie";
import { decrypt } from "@/app/lib/session";
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const { session } = parse(req.headers.cookie || "");

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const sessionData = decrypt(session);

    if (!sessionData ) {
      throw new Error("Invalid session");
    }

    res.status(200).json({ message: "Authenticated" });
  } catch (error) {
    res.status(401).json({ message: "Invalid session", error: error });
  }
}
