import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../lib/image/Logo.png';

const HeaderBlock = styled.div`
  border-bottom: 1px solid #e1e1e1;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .HeaderLeft {
    width: 200px;
    cursor: pointer;
    img {
      width: 90%;
      height: 90px;
      margin: 0.5rem 0;
    }
  }

  span {
    font-size: 25px;
    margin-right: 2rem;

    @media (max-width: 425px) {
      display: none;
    }
  }
`;

const Header = () => {
  //현재 시간
  const today = new Date();
  const dataString = today.toLocaleDateString();
  const navigate = useNavigate();
  const { user_Id } = useParams();

  const onMoveMyPage = () => {
    navigate(`/patient/mainpage/${user_Id}`);
  };
  return (
    <HeaderBlock>
      <div className="HeaderLeft" onClick={onMoveMyPage}>
        <img src={Logo} alt="Logo" />
      </div>
      <span>{dataString}</span>
    </HeaderBlock>
  );
};

export default Header;
