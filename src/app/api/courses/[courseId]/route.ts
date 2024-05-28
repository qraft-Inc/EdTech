import { NextResponse } from "next/server";
import { handlePrismaError } from "@/helpers";
import { db } from "@/lib/db";

import { v4 as uuidv4 } from "uuid";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const courses = await db.course.findMany({
      where: { id: params.userId },
    });
    return NextResponse.json(courses);
  } catch (error) {
    console.log("[COURSES]", error);
    return handlePrismaError(error);
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const {
      title,
      videoUrl,
      courseDescription,
      chapterDescription,
      attachDescritpion,
      attachmentUrl,
      category,
      price,
    } = await req.json();

    const courseExists = await db.course.findUnique({
      where: { id: params.courseId },
    });

    const categoryExists = await db.category.findUnique({
      where: { name: category },
    });

    if (!courseExists || !categoryExists) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const lastChapter = await db.chapter.findFirst({
      where: {
        courseId: params.courseId,
      },
      orderBy: {
        position: "desc",
      },
    });

    const newPosition = lastChapter ? lastChapter.position + 1 : 1;

    await db.chapter.create({
      data: {
        id: uuidv4(),
        courseId: params.courseId,
        title: title,
        description: chapterDescription,
        videoUrl: videoUrl,
        position: newPosition,
      },
    });

    await db.attachment.create({
      data: {
        id: uuidv4(),
        courseId: params.courseId,
        name: attachDescritpion,
        url: attachmentUrl,
      },
    });

    const updateCourse = await db.course.update({
      where: { id: params.courseId },
      data: {
        description: courseDescription,
        categoryId: categoryExists?.id,
        price: price,
      },
    });

    return NextResponse.json(updateCourse);
  } catch (error) {
    console.log("[COURSES]", error);
    return handlePrismaError(error);
  }
}
