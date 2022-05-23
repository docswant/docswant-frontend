import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { FcSurvey } from 'react-icons/fc';
import { BsQuestionCircle } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';

const BottomNavBlock = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    z-index: 100;
    border-top: 1px solid #eeeeee;

    .imageWrapper {
      width: 100%;
      height: 100%;
      padding: 0 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

const BottomNav = () => {
  const { user_Id } = useParams();
  const navigate = useNavigate();

  const onMoveHome = () => {
    navigate(`/patient/mainpage/${user_Id}`);
  };

  const onMoveSurvey = () => {
    navigate(`/patient/survey/1/${user_Id}`);
  };

  const onMoveQuestion = () => {
    navigate(`/patient/inquiry_list/${user_Id}`);
  };
  return (
    <BottomNavBlock>
      <div className="imageWrapper">
        <AiOutlineHome onClick={onMoveHome} />
        <FcSurvey onClick={onMoveSurvey} />
        <BsQuestionCircle onClick={onMoveQuestion} />
      </div>
    </BottomNavBlock>
  );
};

export default BottomNav;
