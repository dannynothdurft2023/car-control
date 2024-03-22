import { MongoClient, Collection, Db } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  // const uri: string = process.env.MONGODB_URI || "";
  // const client: MongoClient = new MongoClient(uri);

  // await client.connect();
  // const database: Db = client.db("car-control");
  // const colCar: Collection = database.collection("car");

  try {
    //const getCarInfo = await colCar.find().toArray();

    //if (getCarInfo) {

    return NextResponse.json({
      success: true,
      message: "Auto gefunden",
      data: "hey",
      //data: getCarInfo[0],
      status: 200,
    });
    // }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
