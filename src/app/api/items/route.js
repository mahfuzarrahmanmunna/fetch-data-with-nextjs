import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    const response = {
        message: "Successfully fetched data",
        error: false,
        status: 200,
    };
    return Response.json(response);
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
