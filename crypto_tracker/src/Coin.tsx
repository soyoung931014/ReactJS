import React from 'react';
import { useParams } from 'react-router-dom';

const Coin = () => {
  const { coinId } = useParams();

  return <div>CoinId: {coinId}</div>;
};

export default Coin;
