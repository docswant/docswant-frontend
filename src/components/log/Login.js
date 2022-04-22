import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LoginBlock = styled.div`
  padding: 20px 0 100px;
  background-color: ${palette.green};
  height: 550px;
  h1 {
    color: black;
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 70px;
  }
  .login_box {
    text-align: center;
    width: 600px;
    margin: 0 auto;
    border-radius: 6px;
    background-color: white;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
    color: #555;
    form {
      padding: 30px 22px;
      input {
        width: 100%;
        margin-bottom: 12px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        box-sizing: border-box;
      }
      [type='submit'] {
        width: 150px;
        margin-top: 12px;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        background-color: #006633;
      }
      p {
        font-size: 15px;
        color: #006633;
      }
    }
  }
`;

function Login() {
  return (
    <LoginBlock>
      <h1>로 그 인</h1>
      <div class="login_box">
        <form>
          <input type="text" placeholder="아이디를 입력하세요." />
          <input type="password" placeholder="비밀번호를 입력하세요." />
          <input type="submit" value={'LOGIN'} />
          <p>
            * 아이디는 환자 번호 혹은 의사 번호이고, 초기 비밀번호는
            생년월일입니다. <br />* 로그인 후 비밀번호를 변경하세요!
          </p>
        </form>
      </div>
    </LoginBlock>
  );
}

export default Login;
