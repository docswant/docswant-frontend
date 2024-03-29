import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useNavigate, useParams } from 'react-router-dom';

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

  @media (max-width: 768px) {
    display: none;
  }
`;

function Navi() {
  const navigate = useNavigate();
  const { user_Id } = useParams();

  const onMoveMyPage = () => {
    navigate(`/patient/mainpage/${user_Id}`);
  };
  const onMoveSurvey = () => {
    navigate(`/patient/survey/1/${user_Id}`);
  };

  const onMoveInquiry = () => {
    navigate(`/patient/inquiry_list/1/${user_Id}`);
  };

  return (
    <NaviBlock>
      <div onClick={onMoveMyPage}>마이페이지</div>

      <div onClick={onMoveSurvey}>설문</div>

      <div onClick={onMoveInquiry}>나의 문의함</div>
    </NaviBlock>
  );
}

export default Navi;
