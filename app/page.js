export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to StrataMate</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-4">
        This website helps your apartment building&rsquo;s Owners Corporation manage meetings, 
        documents, announcements, and more.
      </p>
      <p className="text-md text-green-600 italic">
        {process.env.NEXT_PUBLIC_SITE_MESSAGE}
      </p>
    </main>
  );
}
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to StrataMate</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl">
        This website helps your apartment building&apos;s Owners Corporation manage meetings, documents, announcements, and more.
      </p>
      <Link
        href="/feedback"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Give Feedback 💬
      </Link>
    </main>
  );
}
