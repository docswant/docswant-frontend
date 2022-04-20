import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const MainTempleteBlock = styled.div`
  width: 100%;
`;

const MainBlock = styled.div`
  width: 500px;
  height: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #image {
    width: 100px;
    height: 100px;
    background-color: gray;
    margin-bottom: 1rem;
  }

  .Auth {
    display: flex;
    justify-content: center;
  }

  .Register {
    margin-top: 1rem;
    font-size: 14px;
    color: ${palette.gray[1]};

    #registerText {
      margin-left: 0.5rem;
      text-decoration: underline;
      color: black;
      cursor: pointer;
    }
  }
`;

const AuthBlock = styled.button`
  border: 1px solid #e2e2e2;
  outline: none;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background-color: ${palette.green[0]};
  cursor: pointer;
`;

const MainTemplete = () => {
  return (
    <MainTempleteBlock>
      <MainBlock>
        <div id="image"></div>
        <div className="Auth">
          <Link to="/login">
            <AuthBlock>의사로 로그인 하기</AuthBlock>
            <AuthBlock style={{ marginRight: 0 }}>환자로 로그인 하기</AuthBlock>
          </Link>
        </div>
        <div className="Register">
          <span>아이디가 없으신가요?</span>
          <Link to="/register">
            <span id="registerText">회원가입</span>
          </Link>
        </div>
      </MainBlock>
    </MainTempleteBlock>
  );
};

export default MainTemplete;
