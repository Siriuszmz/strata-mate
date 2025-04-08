import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to StrataMate</h1>
      <p className="text-lg text-gray-700 text-center max-w-xl mb-8">
        This website helps your apartment building&apos;s Owners Corporation manage meetings, 
        documents, announcements, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link href="/about" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center">
          About Us
        </Link>
        <Link href="/services" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition text-center">
          Our Services
        </Link>
        <Link href="/contact" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-center">
          Contact Us
        </Link>
        <Link href="/faq" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition text-center">
          FAQ
        </Link>
        <Link href="/feedback" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition text-center">
          Give Feedback
        </Link>
      </div>
    </main>
  );
}
