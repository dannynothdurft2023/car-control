import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/db";

export async function POST(req: Request) {
  const collection = await connectToDatabase("issue");

  try {
    const { list }: { list: string } = await req.json();

    const extractedParam = list.substring(
      list.indexOf("/list/") + "/list/".length
    );

    const filterMap: Record<string, string> = {
      anschaffung: "Anschaffung",
      reparatur: "Reparatur",
      zubehoer: "Zubehör",
      "laufende-kosten": "laufende Kosten",
    };

    let filterList: string = filterMap[extractedParam];

    const issues = await collection
      .find({ category: filterList })
      .sort({ _id: -1 })
      .toArray();

    if (issues) {
      return NextResponse.json({
        success: true,
        message: "Auto gefunden",
        data: issues,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const collection = await connectToDatabase("issue");

  try {
    const data = await req.body.json();

    console.log(data);

    return NextResponse.json({
      success: true,
      message: "Auto gefunden",
      data: "Ist angekommen",
    });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
