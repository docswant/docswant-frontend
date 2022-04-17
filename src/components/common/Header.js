import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useNavigate } from 'react-router-dom';

const HeaderBlock = styled.div`
  border-bottom: 1px solid ${palette.gray[0]};
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .HeaderLeft {
    display: flex;
    align-items: center;
    div {
      width: 50px;
      height: 50px;
      background-color: gray;
      margin-right: 1rem;
      cursor: pointer;
    }

    h2 {
      color: ${palette.green[0]};
    }
  }

  span {
    font-size: 25px;
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
        <div onClick={onGoMain}></div>
        <h2>닥스원트</h2>
      </div>
      <span>{dataString}</span>
    </HeaderBlock>
  );
};

export default Header;
