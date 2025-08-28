import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { encrypt } from "@/app/lib/session";

interface User {
  email: string;
  password: string;
  id: string; 
  name: string; 
}

interface Data {
  users: User[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const filePath = path.join(process.cwd(), "public/db.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const data: Data = JSON.parse(fileContent); 

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    const user = data.users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const sessionData = { email: user.email, id: user.id };
    const encryptedSessionData = encrypt(sessionData);

    
    const cookie = serialize("session", encryptedSessionData, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, 
      path: "/",
    });

    res.setHeader("Set-Cookie", cookie);

    return res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ message: "Internal server error", error: error });
  }
}
