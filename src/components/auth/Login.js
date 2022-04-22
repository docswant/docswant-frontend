import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Logo from '../../lib/image/Logo.png'

const LoginBlock = styled.div`
  padding: 1.5rem 0 6rem;
  background-color: #EBEBEB;
  .login_box{
    text-align: center;
    width: 35rem;
    margin: 0 auto;
    border-radius: 6px;
    background-color: #EBEBEB;
    color: #555;
    form {
      padding: 2rem 1.5rem;
      img{
        width: 100%;
        margin-top: 30px;
        margin-bottom: 70px;
      }
      h1{
        color: black;
        font-size: 35px;
        font-weight: 700;
        text-align: center;
        /* margin-bottom: 60px; */
      }
      input{
        font-size: 16px;
        width: 70%;
        margin-bottom: 12px;
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        outline: none;
        box-sizing: border-box;
      }
      [type="submit"]{
        width: 10rem;
        margin-top: 12px;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        background-color: #94C8F7;
      }
      p {
        font-size: 15px;
        color: #333;
      }
    }
  }
`;

function Login() {
  return (
    <LoginBlock>
      <div class="login_box">
        <form>
          <img src={Logo} />
          <input type="text" placeholder='아이디를 입력하세요.' />
          <input type="password" placeholder='비밀번호를 입력하세요.' />
          <input type="submit" value={"LOGIN"} />
          <p>
            * 환자의 경우 아이디는 환자 번호이고, 초기 비밀번호는 생년월일입니다. <br/>
            * 로그인 후 비밀번호를 변경하세요!
          </p>
        </form>
      </div>
    </LoginBlock>
  );
}

export default Login;
