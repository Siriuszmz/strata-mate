import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* 顶部导航栏 */}
      <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 bg-white shadow-md rounded-lg mb-10">
        <h1 className="text-2xl font-bold text-blue-700">StrataMate</h1>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="/faq" className="text-gray-700 hover:text-blue-600">FAQ</Link>
          <Link href="/feedback" className="text-gray-700 hover:text-blue-600">Feedback</Link>
        </div>
      </nav>

      {/* 欢迎语 */}

     <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Welcome to StrataMate Portal
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-8">
        Helping owners and committees manage their apartment buildings through clear communication, secure documentation, and streamlined feedback.
      </p>
<img
  src="/building.jpg"
  alt="Modern apartment complex"
  className="w-full max-w-md rounded-lg shadow-lg mb-8"
/>


      {/* 五个跳转按钮 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl text-center">
        <Link href="/about" className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-blue-600 font-semibold mb-2">🏢 About</h3>
          <p className="text-gray-600 text-sm">Learn more about StrataMate and our purpose.</p>
        </Link>
        <Link href="/services" className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-green-600 font-semibold mb-2">🛠 Services</h3>
          <p className="text-gray-600 text-sm">Explore our features to help manage strata buildings.</p>
        </Link>
        <Link href="/contact" className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-purple-600 font-semibold mb-2">📞 Contact</h3>
          <p className="text-gray-600 text-sm">Reach out for support, questions, or suggestions.</p>
        </Link>
        <Link href="/faq" className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-yellow-600 font-semibold mb-2">❓ FAQ</h3>
          <p className="text-gray-600 text-sm">Get answers to the most common questions.</p>
        </Link>
        <Link href="/feedback" className="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-pink-600 font-semibold mb-2">💬 Feedback</h3>
          <p className="text-gray-600 text-sm">Submit your thoughts and comments securely.</p>
        </Link>
      </div>
    </main>
  );
}

