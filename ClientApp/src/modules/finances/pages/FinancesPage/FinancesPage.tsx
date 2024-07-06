import React from 'react'
import PaymentChart from '../../components/PaymentChart/PaymentChart'

export const FinancesPage = () => {
  const chartData = [
    { quarter: '2023Q4', Monthly: 1200, Quarterly: 1000, Yearly: 400 },
    { quarter: '2024Q1', Monthly: 1600, Quarterly: 1000, Yearly: 200 },
    { quarter: '2024Q2', Monthly: 1300, Quarterly: 1300, Yearly: 400 },
    { quarter: '2024Q3', Monthly: 700, Quarterly: 1300, Yearly: 100 },
  ];

  return (
    <div>
      FinancesPage
      <PaymentChart data={chartData} />
    </div>
  )
}
