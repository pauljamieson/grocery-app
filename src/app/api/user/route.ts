import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextApiRequest } from "next";

interface RequestBody {
  username: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const user = await prisma.user.create({
      data: {
        name: body.username,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    });
    const { password, ...userWithoutPass } = user;
    return new Response(
      JSON.stringify({ userCreated: true, user: { ...userWithoutPass } })
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ userCreated: false }));
  }
}
