import React from 'react';
import styled from 'styled-components';

const MainTempleteBlock = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const MainTemplete = ({ children }) => {
  return <MainTempleteBlock>{children}</MainTempleteBlock>;
};

export default MainTemplete;
