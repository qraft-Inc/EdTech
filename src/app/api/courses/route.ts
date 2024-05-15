import { NextResponse } from "next/server";
import { db } from "@/lib/db";

import { v4 as uuidv4 } from "uuid";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const id = searchParams.get("id") as unknown as String;
    let courses;
    if (typeof id === "string") {
      courses = await db.course.findMany({ where: { userId: id } });
    }
    return NextResponse.json(courses);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, userId } = await req.json();
    const newCourse = await db.course.create({
      data: {
        id: uuidv4(),
        title,
        userId: userId,
      },
    });
    return NextResponse.json(newCourse);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
