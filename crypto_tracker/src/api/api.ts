import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const fetchCoins = async () => {
  const response = await axios.get(`${BASE_URL}/coins`);
  return response.data.slice(0, 100);
};

export const fetchCoinInfo = async (coinId: string) => {
  const infoData = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return infoData.data;
};
export const fetchCoinTickers = async (coinId: string) => {
  const PriceData = await axios.get(`${BASE_URL}/tickers/${coinId}`);
  return PriceData.data;
};

export const fetchCoinHistory = async (coinId: string) => {
  const coinHistoryData = await axios.get(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`,
  );
  return coinHistoryData.data;
};
