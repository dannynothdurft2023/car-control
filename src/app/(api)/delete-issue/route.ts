import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import connectToDatabase from "@/lib/db";

export async function POST(req: Request) {
  const collection = await connectToDatabase("issue");

  try {
    const { data }: { data: any } = await req.json();
    const itemId = ObjectId.createFromHexString(data._id);

    const result = await collection.deleteOne({ _id: itemId });

    if (result.deletedCount === 1) {
      return NextResponse.json({
        success: true,
        message: "Auto gefunden",
        data: "Ist angekommen",
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
