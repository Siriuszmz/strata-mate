'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function OwnersPage() {
  const [owners, setOwners] = useState([])

  useEffect(() => {
    const fetchOwners = async () => {
      const { data, error } = await supabase.from('owners').select('*')
      if (error) {
        console.error('Error fetching owners:', error.message)
      } else {
        setOwners(data)
      }
    }
    fetchOwners()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Owner List</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Unit</th>
            <th className="border px-4 py-2">Entitlements</th>
          </tr>
        </thead>
        <tbody>
          {owners.map(owner => (
            <tr key={owner.id}>
              <td className="border px-4 py-2">{owner.id}</td>
              <td className="border px-4 py-2">{owner.name}</td>
              <td className="border px-4 py-2">{owner.email}</td>
              <td className="border px-4 py-2">{owner.unit}</td>
              <td className="border px-4 py-2">{owner.entitlements}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
