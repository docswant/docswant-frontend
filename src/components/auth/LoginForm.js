import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Logo from '../../lib/image/Logo.png';
import { Link } from 'react-router-dom';

const LoginBlock = styled.div`
  padding: 3rem 0;
  background-color: #ebebeb;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .login_box {
    text-align: center;
    width: 600px;
    margin: 0 auto;
    border-radius: 6px;
    color: #555;
    form {
      width: 100%;
      padding: 2rem 1.5rem;
      img {
        width: 80%;
        margin-top: 30px;
        margin-bottom: 70px;
      }
      button {
        width: 35%;
        outline: none;
        background-color: ${palette.blue[0]};
        border: none;
        padding: 1rem;
        border-radius: 7px;
        font-size: 20px;
        font-weight: bold;
        margin-top: 1rem;
        color: white;
        cursor: pointer;
      }
      p {
        font-size: 15px;
        color: #333;
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
    }
  }
`;

const StyledInput = styled.input`
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 7px;
  width: 75%;
  padding: 1rem;
  font-size: 18px;
  outline: none;

  &::placeholder {
    color: #cccccc;
  }

  &:hover {
    border: 1px solid ${palette.blue[0]};
  }
`;

const ErrorMessageBlock = styled.div`
  text-align: center;
  margin: 0.3rem 0;
  color: red;
  font-weight: bold;
`;

function LoginForm({ form, loginError, onChange, onSubmit }) {
  return (
    <LoginBlock>
      <div className="login_box">
        <form onSubmit={onSubmit}>
          <img src={Logo} alt="MainLogo" />
          <StyledInput
            type="text"
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="아이디를 입력하세요."
          />
          <StyledInput
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="비밀번호를 입력하세요."
          />
          {loginError && (
            <ErrorMessageBlock>
              아이디와 비밀번호를 확인해주세요
            </ErrorMessageBlock>
          )}
          <button>로그인</button>
          <p>
            * 환자의 경우 아이디는 환자 번호이고, 초기 비밀번호는
            생년월일입니다. <br />* 로그인 후 비밀번호를 변경하세요!
          </p>
          <div className="Register">
            <span>아이디가 없으신가요?</span>
            <Link to="/register">
              <span id="registerText">회원가입</span>
            </Link>
          </div>
        </form>
      </div>
    </LoginBlock>
  );
}

export default LoginForm;
