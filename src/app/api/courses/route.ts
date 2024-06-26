import { NextResponse } from "next/server";
import { handlePrismaError } from "@/helpers";
import { db } from "@/lib/db";

import { v4 as uuidv4 } from "uuid";

export async function GET() {
  try {
    const courses = await db.course.findMany();

    return NextResponse.json(courses);
  } catch (error) {
    console.log("[COURSES]", error);
    return handlePrismaError(error);
  }
}

export async function POST(req: Request) {
  try {
    const { title, author, imageUrl, userId } = await req.json();
    const newCourse = await db.course.create({
      data: {
        id: uuidv4(),
        title,
        author,
        imageUrl,
        userId: userId,
      },
    });
    return NextResponse.json(newCourse);
  } catch (error) {
    console.log("[COURSES]", error);
    return handlePrismaError(error);
  }
}
