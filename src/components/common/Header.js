import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useNavigate } from 'react-router-dom';
import Logo from '../../lib/image/Logo.png';

const HeaderBlock = styled.div`
  border-bottom: 1px solid ${palette.gray[0]};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .HeaderLeft {
    display: flex;
    img {
      width: 90%;
      height: 100px;
      margin: .5rem 0;
      cursor: pointer;
    }
  }

  span {
    font-size: 25px;
  }

  .HeaderRight {
    display: flex;
    button {
      width: 11rem;
      height: 3rem;
      margin: .5rem 3rem;
      cursor: pointer;
    }
  }

`;

const Header = () => {
  const navigate = useNavigate();

  //현재 시간
  const today = new Date();
  const dataString = today.toLocaleDateString();

  //로고 클릭 시 메인페이지 이동
  const onGoMain = () => {
    navigate('/');
  };
  return (
    <HeaderBlock>
      <div className="HeaderLeft">
        <img src={Logo} alt="Logo" onClick={onGoMain}/>
      </div>
      <span>{dataString}</span>
      <div className="HeaderRight">
        <button>Menu</button>
      </div>
    </HeaderBlock>
  );
};

export default Header;
