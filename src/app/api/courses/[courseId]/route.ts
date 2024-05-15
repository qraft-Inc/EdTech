import { NextResponse } from "next/server";
import { db } from "@/lib/db";

import { v4 as uuidv4 } from "uuid";

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    console.log(params);
    const courses = await db.course.findMany();
    return NextResponse.json(courses);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = await req.json();
    console.log(userId);
    const courses = await db.course.findUnique({
      where: { id: params.courseId },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
