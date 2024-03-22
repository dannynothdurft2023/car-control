import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri: string = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export async function GET() {
  await client.connect();
  const database = client.db("car-control");
  const colIssue = database.collection("issue");

  try {
    const getAllIssue = await colIssue.find().toArray();

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
