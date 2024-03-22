import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/db";

export async function GET() {
  const collection = await connectToDatabase("car");

  try {
    const carInfo = await collection.find().toArray();

    if (carInfo) {
      return NextResponse.json({
        success: true,
        message: "Auto gefunden",
        data: carInfo[0],
        status: 200,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
