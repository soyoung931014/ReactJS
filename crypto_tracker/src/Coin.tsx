import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface RouteState {
  state: {
    name: string;
  };
}
const Coin = () => {
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const [loading, setLoading] = useState(true);

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
