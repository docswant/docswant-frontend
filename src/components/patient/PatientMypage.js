import React from 'react';
import styled from 'styled-components';

const PatientMypageBlock = styled.div`
  width: 100%;
  padding: 5rem 10rem;

  .imageBlock {
    width: 100px;
    height: 100px;
    background-color: gray;
    border-radius: 50%;
  }

  .infoBlock {
    display: flex;
    align-items: center;
  }
`;

const PatientMypage = () => {
  return (
    <PatientMypageBlock>
      <div className="imageBlock"></div>
      <div className="infoBlock">
        <h1>환자 : </h1> <h3>정재욱</h3>
        <h1>환자 : </h1> <h3>정재욱</h3>
      </div>
    </PatientMypageBlock>
  );
};

export default PatientMypage;
