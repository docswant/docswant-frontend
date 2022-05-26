import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { useNavigate, useParams } from 'react-router-dom';

const DoctorNaviBlock = styled.div`
  border-bottom: 1px solid #e1e1e1;
  align-items: center;
  display: flex;
  padding: 0 10rem;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  div {
    padding: 0.5rem 1.5rem;
    text-align: center;
    border-bottom: 5px solid white;
    &:hover {
      border-bottom: 5px solid ${palette.blue[1]};
    }
  }
  .select {
    border-bottom: 5px solid ${palette.blue[1]};
  }

  @media (max-width: 1000px) {
    padding: 0 5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const DoctorNavi = () => {
  const navigate = useNavigate();
  const { user_Id } = useParams();
  const [isselect, setIsSelect] = useState(false);

  const onHandleClick = (idx) => {
    const newArr = Array(3).fill(false);
    newArr[idx] = !newArr[idx];
    setIsSelect(newArr);
    console.log(newArr);
  };

  const onMoveMyPage = () => {
    navigate(`/doctor/mainpage/1/${user_Id}`);
  };
  const onMoveRound = () => {
    navigate(`/doctor/round/${user_Id}`);
  };
  const onMoveModify = () => {
    navigate(`/doctor/modify/${user_Id}`);
  };

  return (
    <DoctorNaviBlock>
      <div
        className={isselect[0] === true && 'select'}
        onClick={() => {
          onHandleClick(0);
          onMoveMyPage();
        }}
      >
        마이페이지
      </div>
      <div
        className={isselect[1] === true && 'select'}
        onClick={() => {
          onHandleClick(1);
          onMoveRound();
        }}
      >
        회진 일정
      </div>
      <div
        className={isselect[2] === true && 'select'}
        onClick={() => {
          onHandleClick(2);
          onMoveModify();
        }}
      >
        환경 설정
      </div>
    </DoctorNaviBlock>
  );
};

export default DoctorNavi;
