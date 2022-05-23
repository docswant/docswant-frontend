import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';

const RegisterFormBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebebeb;

  @media (max-width: 425px) {
    padding: 0 1rem;
  }

  .formBlock {
    width: 100%;
    display: flex;
    justify-content: center;
    form {
      width: 425px;
      display: flex;
      flex-direction: column;

      span {
        font-size: 15px;
      }

      button {
        width: 100%;
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

      .duplicateBlock {
        display: flex;
        align-items: center;

        .duplicate {
          width: 30%;
          margin: 0;
          margin-left: 1rem;
          font-size: 12px;
          padding: 1rem;
          cursor: pointer;

          @media (max-width: 425px) {
            width: 40%;
          }
        }
      }
    }
  }
`;

const StyledInput = styled.input`
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 7px;
  width: 100%;
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

const MedicalSubjectBlock = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 7px;
  background-color: white;
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

  &:hover {
    border: 1px solid ${palette.blue[0]};
  }
`;

const DropDownBlock = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #ddd;
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
      border: 1px solid #ddd;
      color: #333333;
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      cursor: pointer;

      &:hover {
        background-color: ${palette.blue[0]};
        color: white;
        border: 1px solid ${palette.blue[0]};
      }
    }
  }
`;

const ErrorMessageBlock = styled.div`
  text-align: center;
  margin: 0.3rem 0;
  color: red;
  font-weight: bold;
`;

const RegisterForm = ({
  form,
  onChange,
  onMajor,
  onSubmit,
  registerError,
  onDuplicateCode,
  onDuplicateUser,
  duplicateCode,
  duplicateUser,
}) => {
  const [medicalText, setMedicalText] = useState('진료과목을 고르세요');
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState({
    username: null,
    password: null,
  });
  const onToggle = () => {
    setToggle(!toggle);
  };

  const onSetMedicalText = (text, major) => {
    setMedicalText(text);
    setToggle(!toggle);
    onMajor(major);
  };

  const onCheckPasswordConfirm = (e) => {
    const { password, passwordConfirm } = form;

    if (password !== passwordConfirm) {
      setError({ ...error, password: false });
    } else {
      setError({ ...error, password: true });
    }
  };
  return (
    <RegisterFormBlock>
      <h2>회원가입</h2>
      <div className="formBlock">
        <form onSubmit={onSubmit}>
          <span>아이디</span>
          <div className="duplicateBlock">
            <StyledInput
              type="text"
              name="username"
              value={form.username}
              placeholder="아이디 입력"
              onChange={onChange}
            />
            <button
              type="button"
              className="duplicate"
              onClick={onDuplicateUser}
            >
              중복 확인
            </button>
          </div>
          {duplicateUser === true && (
            <ErrorMessageBlock>아이디가 중복됩니다.</ErrorMessageBlock>
          )}
          {duplicateUser === false && (
            <ErrorMessageBlock>사용가능한 아이디 입니다.</ErrorMessageBlock>
          )}
          <span>비밀번호</span>
          <StyledInput
            type="password"
            name="password"
            value={form.password}
            placeholder="비밀번호 입력"
            onChange={onChange}
          />
          <span>비밀번호 확인</span>
          <StyledInput
            type="password"
            name="passwordConfirm"
            value={form.passwordConfirm}
            placeholder="비밀번호 확인"
            onKeyUp={onCheckPasswordConfirm}
            onChange={onChange}
          />
          {error.password === false && (
            <ErrorMessageBlock>비밀번호가 일치하지 않습니다</ErrorMessageBlock>
          )}
          <span>이름</span>
          <StyledInput
            type="text"
            name="name"
            value={form.name}
            placeholder="이름 입력"
            onChange={onChange}
          />
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
                  <li
                    onClick={() => onSetMedicalText('정형외과', 'orthopedics')}
                  >
                    정형외과
                  </li>
                  <li onClick={() => onSetMedicalText('내과', 'medicine')}>
                    내과
                  </li>
                  <li onClick={() => onSetMedicalText('외과', 'surgical')}>
                    외과
                  </li>
                  <li
                    onClick={() => onSetMedicalText('신경외과', 'neurosurgery')}
                  >
                    신경외과
                  </li>
                  <li
                    onClick={() =>
                      onSetMedicalText('흉부외과', 'cardiothoracic')
                    }
                  >
                    흉부외과
                  </li>
                </ul>
              </DropDownBlock>
            )}
          </MedicalSubjectBlock>
          <span>의사 코드</span>
          <div className="duplicateBlock">
            <StyledInput
              type="text"
              name="code"
              value={form.code}
              placeholder="의사코드 입력"
              onChange={onChange}
            />
            <button
              type="button"
              className="duplicate"
              onClick={onDuplicateCode}
            >
              코드 확인
            </button>
          </div>
          {duplicateCode === false && (
            <ErrorMessageBlock>의사코드가 일치하지 않습니다.</ErrorMessageBlock>
          )}
          {duplicateCode === true && (
            <ErrorMessageBlock>의사코드가 일치 합니다.</ErrorMessageBlock>
          )}
          <button>회원가입</button>
        </form>
      </div>
    </RegisterFormBlock>
  );
};

export default RegisterForm;
