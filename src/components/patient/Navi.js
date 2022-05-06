import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const NaviBlock = styled.div`
  border-bottom: 1px solid #E1E1E1;
  align-items: center;
  display: flex;
  padding: 1rem 10rem;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
`;

function Navi() {
  return (
    <NaviBlock>
      <Link to='/'>
        <span>마이페이지</span>
      </Link>
      <Link to='/'>
        <span>환경설정</span>
      </Link>
      <Link to='/'>
        <span>설문</span>
      </Link>
      <Link to='/inquiry_list'>
        <span>나의 문의함</span>
      </Link>
    </NaviBlock>
  )
}

export default Navi