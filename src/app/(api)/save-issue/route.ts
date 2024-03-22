import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/db";

export async function POST(req: Request) {
  await client.connect();
  const database = client.db("car-control");
  const colIssue = database.collection("issue");

  try {
    const { data } = await req.json();

    const save = await collection.insertOne({
      category: data.category,
      text: data.text,
      value: data.value,
    });

    if (save) {
      return NextResponse.json({
        success: true,
        message: "Auto gefunden",
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
