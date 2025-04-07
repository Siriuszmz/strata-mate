'use client';

import { useState } from 'react';

export default function FeedbackPage() {
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    setResponseMsg(`${res.status}: ${data.message}`);
    setMessage('');
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">Feedback</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Write your feedback here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {responseMsg && <p className="mt-4 text-gray-700">Server: {responseMsg}</p>}
    </main>
  );
}
