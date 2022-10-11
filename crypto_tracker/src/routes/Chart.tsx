import { fetchCoinHistory } from 'api/api';
import React from 'react';
import { useQuery } from 'react-query';

interface ChartProps {
  coinId: string;
}
const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId),
  );
  return <div>Chart</div>;
};

export default Chart;
