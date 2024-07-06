import React from 'react'
import PaymentChart from '../../components/PaymentChart/PaymentChart'
import { useGetChartDataQuery } from '../../redux/api';

export const FinancesPage: React.FC = () => {
  const { data: chartData, error, isLoading } = useGetChartDataQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      FinancesPage
      {chartData && <PaymentChart data={chartData} />}
    </div>
  );
};
