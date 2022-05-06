import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Logo from '../../lib/image/Logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginBlock = styled.div`
  padding: 5rem 0 6rem;
  background-color: #ebebeb;
  width: 100%;
  .login_box {
    text-align: center;
    width: 35rem;
    margin: 0 auto;
    border-radius: 6px;
    color: #555;
    form {
      padding: 2rem 1.5rem;
      img {
        width: 100%;
        margin-top: 30px;
        margin-bottom: 70px;
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
      [type='submit'] {
        width: 10rem;
        margin-top: 12px;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        background-color: #94C8F7;
        &:hover{
          background-color: #156DBC;
        }
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

async function login(){
  try{
    const response = await axios.post('https://docswant.zooneon.dev/api/v1/login',{
      username : "test123",
      password : "1234"
    })
    console.log(response.data);
  }
  catch(e){
    console.log(e);
  }
}

const onLogin = (e) => {
  e.preventDefault();
  login();
}

function LoginForm() {
  return (
    <LoginBlock>
      <div className="login_box">
        <form>
          <img src={Logo} alt="MainLogo" />
          <input type="text" placeholder="아이디를 입력하세요." />
          <input type="password" placeholder="비밀번호를 입력하세요." />
          <input type="submit" value={'LOGIN'} onClick={onLogin}/>
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
