import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NaviBlock = styled.div`
  border-bottom: 1px solid #e1e1e1;
  align-items: center;
  display: flex;
  padding: 0 13rem;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  div {
    padding: 0.5rem 1.5rem;
    text-align: center;
    border-bottom: 5px solid white;
    &:hover {
      /* text-decoration: underline;
      text-underline-position: under; */
      border-bottom: 5px solid ${palette.blue[1]};
    }
  }
`;

function Navi() {
  const navigate = useNavigate();

  const onMoveMyPage = (userId) => {
    navigate(`/patient/mypage/${userId}`);
  };
  const onMoveSurvey = (userId) => {
    navigate(`/patient/survey/${userId}`);
  };
  return (
    <NaviBlock>
      <div onClick={() => onMoveMyPage(999)}>마이페이지</div>

      <div onClick={() => onMoveSurvey(999)}>설문</div>
      <Link to="/inquiry_list">
        <div>나의 문의함</div>
      </Link>
    </NaviBlock>
  );
}

export default Navi;
