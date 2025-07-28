import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET a single document by ID
export async function GET(req, { params }) {
    const { id } = params;

    try {
        const collection = await dbConnect("first_data");
        const result = await collection.findOne({ _id: new ObjectId(id) });

        if (!result) {
            return NextResponse.json({ error: "Data not found" }, { status: 404 });
        }

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}

// DELETE a document by ID
export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        const collection = await dbConnect("first_data");
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "Data not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Deleted successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}

// PATCH a document by ID
export async function PATCH(req, { params }) {
    const { id } = params;
    const body = await req.json();

    try {
        const collection = await dbConnect("first_data");
        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: body }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: "Data not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Updated successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
