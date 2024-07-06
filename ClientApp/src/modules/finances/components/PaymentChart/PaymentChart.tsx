import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

interface PaymentChartProps {
  data: Array<{ quarter: string; Monthly: number; Quarterly: number; Yearly: number }>;
}

const PaymentChart: React.FC<PaymentChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Monthly" stroke="#8884d8" />
        <Line type="monotone" dataKey="Quarterly" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Yearly" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PaymentChart;
