export async function POST(request) {
  const body = await request.json();
  const message = body.message;

  if (!message || message.length < 3) {
    return new Response(JSON.stringify({ message: 'Message too short.' }), {
      status: 400
    });
  }

  return new Response(JSON.stringify({ message: 'Feedback received!' }), {
    status: 201
  });
}
