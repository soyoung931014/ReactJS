import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface RouteState {
  state: {
    name: string;
  };
}
interface Param {
  coinId: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
const Coin = () => {
  console.log(useParams());
  const { coinId } = useParams() as unknown as Param;
  const { state } = useLocation() as RouteState;
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      const infoData = await axios.get(
        `https://api.coinpaprika.com/v1/coins/${coinId}`,
      );
      const PriceData = await axios.get(
        `https://api.coinpaprika.com/v1/tickers/${coinId}`,
      );
      setInfo(infoData);
      setPriceInfo(PriceData);
    })();
  }, []);
  console.log(info);
  console.log(priceInfo);

  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading'}</Title>
        {/*  //state가 존재하면 name가져오고 존재 안하면 loading */}
      </Header>
      {loading ? <Loader>Loading...</Loader> : <>null</>}
    </Container>
  );
};

export default Coin;

const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;
const Loader = styled.span`
  display: block;
  text-align: center;
`;
