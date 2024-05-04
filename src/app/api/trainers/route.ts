import { NextResponse } from "next/server";
import { db } from "@/lib/db";

import { v4 as uuidv4 } from "uuid";

export async function GET(req: Request) {
  try {
    const trainers = await db.trainer.findMany();
    return NextResponse.json(trainers);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
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
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
