export async function GET() {
    try {
        const response = await fetch("https://api.vercel.app/blog");
        const data = await response.json();
        return Response.json(data);
    }
    catch {
        return Response.json({ error: "An error occurred" }, { status: 500 });
    }
}