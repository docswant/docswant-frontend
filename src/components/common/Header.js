import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Logo from '../../lib/image/Logo.png';

const HeaderBlock = styled.div`
  border-bottom: 1px solid #e1e1e1;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .HeaderLeft {
    display: flex;
    img {
      width: 90%;
      height: 90px;
      margin: 0.5rem 0;
      cursor: pointer;
    }
  }

  span {
    font-size: 25px;
    margin-right: 2rem;
  }
`;

const Header = () => {
  //현재 시간
  const today = new Date();
  const dataString = today.toLocaleDateString();

  return (
    <HeaderBlock>
      <div className="HeaderLeft">
        <Link to="/patient/mypage">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <span>{dataString}</span>
    </HeaderBlock>
  );
};

export default Header;
