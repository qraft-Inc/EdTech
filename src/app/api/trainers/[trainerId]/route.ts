import { NextResponse } from "next/server";
import { handlePrismaError } from "@/helpers";
import { db } from "@/lib/db";

import { v4 as uuidv4 } from "uuid";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const trainer = await db.trainer.findMany({
      where: { id: params.userId },
    });
    return NextResponse.json(trainer);
  } catch (error) {
    console.log("[COURSES]", error);
    return handlePrismaError(error);
  }
}
