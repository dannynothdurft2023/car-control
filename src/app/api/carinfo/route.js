import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET() {
  await client.connect();
  const database = client.db("car-control");
  const colCar = database.collection("car");

  try {
    const getCarInfo = await colCar.find().toArray();

    if (getCarInfo) {
      return NextResponse.json({
        success: true,
        message: "Auto gefunden",
        data: getCarInfo[0],
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST() {}

export async function UPDATE() {}

export async function DELETE() {}
