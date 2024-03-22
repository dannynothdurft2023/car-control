import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Was soll das");
  // const uri = process.env.MONGODB_URI;
  // const client = new MongoClient(uri);

  // await client.connect();
  // const database = client.db("car-control");
  // const colCar = database.collection("car");
  // console.log("vor try");
  // try {
  //   console.log("in Try");
  //   const getCarInfo = await colCar.find().toArray();

  //   if (getCarInfo) {
  //     return NextResponse.json({
  //       success: true,
  //       message: "Auto gefunden",
  //       data: getCarInfo[0],
  //     });
  //   }
  // } catch (error) {
  //   return NextResponse.json({ message: error }, { status: 500 });
  // }
}
