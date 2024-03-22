import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri: string = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export async function POST(req: Request) {
  await client.connect();
  const database = client.db("car-control");
  const colIssue = database.collection("issue");

  try {
    const { data } = await req.json();

    const save = await colIssue.insertOne({
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
