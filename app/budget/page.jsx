'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Legend, Tooltip)

export default function BudgetPage() {
  const [budgetData, setBudgetData] = useState([])

  useEffect(() => {
    const fetchBudget = async () => {
      const { data, error } = await supabase.from('budget').select('*')
      if (error) {
        console.error('Failed to fetch budget:', error.message)
      } else {
        setBudgetData(data)
      }
    }

    fetchBudget()
  }, [])

  // 整理数据用于图表
  const chartData = {
    labels: budgetData.map((item) => item.month),
    datasets: [
      {
        label: 'Income',
        data: budgetData.map((item) => Number(item.income)),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Expenses',
        data: budgetData.map((item) => Number(item.expenses)),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Monthly Budget Overview</h1>
      {budgetData.length > 0 ? (
        <Bar data={chartData} />
      ) : (
        <p>No data available. Please add budget records in Supabase.</p>
      )}
    </div>
  )
}
