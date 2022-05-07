import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NaviBlock = styled.div`
  border-bottom: 1px solid #e1e1e1;
  align-items: center;
  display: flex;
  padding: 1rem 10rem;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

function Navi() {
  const navigate = useNavigate();

  const onMoveSurvey = (userId) => {
    navigate(`/patient/survey/${userId}`);
  };
  return (
    <NaviBlock>
      <Link to="/patient/mypage">
        <span>마이페이지</span>
      </Link>
      <span onClick={() => onMoveSurvey(999)}>설문</span>
      <Link to="/inquiry_list">
        <span>나의 문의함</span>
      </Link>
    </NaviBlock>
  );
}

export default Navi;
