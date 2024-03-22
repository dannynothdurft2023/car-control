import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/db";

export async function GET() {
  const collection = await connectToDatabase("issue");

  try {
    const getAllIssue = await collection.find().toArray();

    if (getAllIssue) {
      return NextResponse.json({
        success: true,
        message: "Auto gefunden",
        data: getAllIssue,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
