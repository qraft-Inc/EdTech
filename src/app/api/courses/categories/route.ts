import { NextResponse } from "next/server";
import { handlePrismaError } from "@/helpers";
import { db } from "@/lib/db";

import { v4 as uuidv4 } from "uuid";

export async function GET(req: Request) {
  try {
    const categories = await db.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.log("[CATEGORIES]", error);
    return handlePrismaError(error);
  }
}

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const newCategory = await db.category.create({
      data: {
        id: uuidv4(),
        name,
      },
    });
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log("[CATEGORIES]", error);
    return handlePrismaError(error);
  }
}
