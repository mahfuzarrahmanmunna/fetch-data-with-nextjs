export async function GET(req, params) {
    const p = await params;
    console.log(p);

    return Response.json({ p })
}

export async function DELETE(req, params) {
    const p = await params
    console.log(p);
    return Response.json({ p })

}
export async function PATCH(req, params) {
    const p = await params
    console.log(p);

    return Response.json({ p })

}