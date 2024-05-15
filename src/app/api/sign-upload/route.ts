import cloudinary from "@/config/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { paramsToSign } = await req.json();
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET as string
    );
    return NextResponse.json({ signature });
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
