import React from 'react';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { MdMeetingRoom } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { useParams, useNavigate } from 'react-router-dom';

const DoctorBottomNavBlock = styled.div`
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

const DoctorBottomNav = () => {
  const { user_Id } = useParams();
  const navigate = useNavigate();

  const onMoveHome = () => {
    navigate(`/doctor/mainpage/1/${user_Id}`);
  };

  const onMoveRound = () => {
    navigate(`/doctor/round/${user_Id}`);
  };

  const onMoveModify = () => {
    navigate(`/doctor/modify/${user_Id}`);
  };
  return (
    <DoctorBottomNavBlock>
      <div className="imageWrapper">
        <AiOutlineHome onClick={onMoveHome} />
        <MdMeetingRoom onClick={onMoveRound} />
        <BiUserCircle onClick={onMoveModify} />
      </div>
    </DoctorBottomNavBlock>
  );
};

export default DoctorBottomNav;
