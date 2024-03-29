import React from 'react';
import styled from 'styled-components';
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
      <div onClick={() => onMoveMyPage()}>마이페이지</div>
      <div onClick={onMoveRound}>회진 일정</div>
      <div onClick={onMoveModify}>환경 설정</div>
    </DoctorNaviBlock>
  );
};

export default DoctorNavi;
