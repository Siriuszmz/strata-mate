'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function MaintenancePage() {
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { error } = await supabase.from('requests').insert([
      {
        owner_id: 1, // 这里先写死为 ID 1 的业主，可后续改为用户选择
        category,
        message,
      },
    ])

    if (error) {
      alert('Error submitting request: ' + error.message)
    } else {
      setSubmitted(true)
      setCategory('')
      setMessage('')
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit a Maintenance Request</h1>

      {submitted && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
          Your request has been submitted!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Category</label>
          <select
            className="w-full p-2 border rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrical">Electrical</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Message</label>
          <textarea
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Describe the issue..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
