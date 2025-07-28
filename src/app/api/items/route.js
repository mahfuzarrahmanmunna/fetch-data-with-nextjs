import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const collection = await dbConnect("first_data");
        const data = await collection.find().toArray();
        console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json(
            { message: "Failed to fetch data", error: true, },
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const postedData = await req.json();
        console.log(postedData);
        const collection = await dbConnect("first_data");
        const result = await collection.insertOne(postedData);
        console.log(result);
        return NextResponse.json({
            insertedId: result.insertedId,
            acknowledged: result.acknowledged,
            status: 201,
        });
    } catch (error) {
        console.error("Error inserting data:", error);
        return Response.json(
            { message: "Failed to insert data", error: true, status: 500 },
            { status: 500 }
        );
    }
}
