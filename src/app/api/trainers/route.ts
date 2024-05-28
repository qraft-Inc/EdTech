import { NextResponse } from "next/server";
import { handlePrismaError } from "@/helpers";
import { db } from "@/lib/db";

import { v4 as uuidv4 } from "uuid";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id") as unknown as String;
    let trainer;
    if (typeof id === "string") {
      trainer = await db.trainer.findMany({
        where: { userId: id },
      });
    }
    return NextResponse.json(trainer);
  } catch (error) {
    console.log("[COURSES]", error);
    return handlePrismaError(error);
  }
}

export async function POST(req: Request) {
  try {
    const { fullName, email, password, userId } = await req.json();
    const newUser = await db.trainer.create({
      data: {
        id: uuidv4(),
        userId: userId,
        fullName,
        email,
        password,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.log("[TRAINERS]", error);
    return handlePrismaError(error);
  }
}
