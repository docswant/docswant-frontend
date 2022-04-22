import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

const RegisterFormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .formBlock {
    width: 414px;
    form {
      display: flex;
      flex-direction: column;

      span {
        font-size: 15px;
      }

      button {
        width: 100%;
        outline: none;
        background-color: ${palette.green[0]};
        border: none;
        padding: 1rem;
        border-radius: 7px;
        font-size: 20px;
        font-weight: bold;
        margin-top: 1rem;
      }
    }
  }
`;

const StyledInput = styled.input`
  margin: 0.5rem 0;
  border: 1px solid ${palette.green[0]};
  border-radius: 7px;
  width: 100%;
  padding: 1rem;
  font-size: 18px;
  outline: none;

  &::placeholder {
    color: #cccccc;
  }
`;

const MedicalSubjectBlock = styled.div`
  width: 100%;
  border: 1px solid ${palette.green[0]};
  padding: 1rem;
  border-radius: 7px;
  margin: 0.5rem 0;
  color: #cccccc;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  #medical {
    font-size: 16px;

    ${(props) =>
      props.medicalText &&
      css`
        color: black;
      `}
  }

  svg {
    cursor: pointer;
  }
`;

const DropDownBlock = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid ${palette.green[0]};
  border-top: none;
  left: 0;
  background-color: white;
  z-index: 1;
  top: 55px;

  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      height: 40px;
      border-top: 1px solid ${palette.green[0]};
      color: #333333;
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      cursor: pointer;
    }
  }
`;

const RegisterForm = () => {
  const [medicalText, setMedicalText] = useState('진료과목을 고르세요');
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onSetMedicalText = (text) => {
    setMedicalText(text);
    setToggle(!toggle);
  };
  return (
    <RegisterFormBlock>
      <h2>회원가입</h2>
      <div className="formBlock">
        <form>
          <span>아이디</span>
          <StyledInput type="text" placeholder="아이디 입력" />
          <span>비밀번호</span>
          <StyledInput type="password" placeholder="비밀번호 입력" />
          <span>비밀번호 확인</span>
          <StyledInput type="password" placeholder="비밀번호 확인" />
          <span>이름</span>
          <StyledInput type="text" placeholder="이름 입력" />
          <span>진료 과목</span>
          <MedicalSubjectBlock>
            {medicalText === '진료과목을 고르시오' ? (
              <span id="medical">{medicalText}</span>
            ) : (
              <span id="medical" style={{ color: '#333333' }}>
                {medicalText}
              </span>
            )}
            {toggle ? (
              <BiUpArrow onClick={onToggle} />
            ) : (
              <BiDownArrow onClick={onToggle} />
            )}
            {toggle && (
              <DropDownBlock>
                <ul>
                  <li onClick={() => onSetMedicalText('정형외과')}>정형외과</li>
                  <li onClick={() => onSetMedicalText('내과')}>내과</li>
                  <li onClick={() => onSetMedicalText('외과')}>외과</li>
                  <li onClick={() => onSetMedicalText('신경외과')}>신경외과</li>
                </ul>
              </DropDownBlock>
            )}
          </MedicalSubjectBlock>
          <span>의사 코드</span>
          <StyledInput type="text" placeholder="의사코드 입력" />
          <button>회원가입</button>
        </form>
      </div>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
