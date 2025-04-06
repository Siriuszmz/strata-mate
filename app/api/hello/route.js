export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello from Vercel Serverless Function!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
