export default function FAQPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">Frequently Asked Questions</h1>
      <div className="text-gray-700 text-lg space-y-4">
        <div>
          <strong>Q: Who can access StrataMate?</strong>
          <p>A: Verified lot owners and committee members.</p>
        </div>
        <div>
          <strong>Q: Is my data safe?</strong>
          <p>A: Yes. All information is encrypted and stored securely.</p>
        </div>
        <div>
          <strong>Q: Can I upload documents?</strong>
          <p>A: Yes. Each lot owner can upload documents relevant to their lot or meetings.</p>
        </div>
      </div>
    </main>
  );
}
