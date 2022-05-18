import React from 'react';
import styled from 'styled-components';
import {
  Bars,
  Audio,
  SpinningCircles,
  Grid,
  Puff,
  TailSpin,
} from 'react-loading-icons';

const LoadingBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Loading = () => {
  return (
    <LoadingBlock>
      <TailSpin />
    </LoadingBlock>
  );
};

export default Loading;
