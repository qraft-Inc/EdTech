//**HELPER FUNCTIONS */

import { NextResponse } from "next/server";

// Helper function to handle Prisma errors
export function handlePrismaError(error: any) {
  console.error(error); // Log the error for debugging

  // Format the error response for the client
  const errorResponse = {
    message: error.message || "Internal Server Error", // Provide a user-friendly message
    statusCode: error.code ? getStatusCodeByErrorCode(error.code) : 500, // Map Prisma error code to appropriate HTTP status code
    // Add additional error details if needed for debugging on the client-side
  };

  return NextResponse.json(errorResponse, { status: errorResponse.statusCode });
}

// Helper function to map Prisma error codes to HTTP status codes (optional)
function getStatusCodeByErrorCode(code: string) {
  switch (code) {
    case "P2002": // Duplicate key error
      return 409;
    case "P2025": // Not found error
      return 404;
    default:
      return 500;
  }
}
