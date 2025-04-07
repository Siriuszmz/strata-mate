export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "Guest";

  return new Response(JSON.stringify({ message: `Hello, ${name}!` }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
