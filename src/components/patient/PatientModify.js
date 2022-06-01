import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PatientModifiyBlock = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  padding-bottom: 150px;

  @media (max-width: 425px) {
    padding: 1rem;
  }

  h2 {
    margin: 1rem;
    margin-bottom: 5rem;
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
        &:hover{
          background-color: ${palette.blue[1]};
        }
      }

      .duplicateBlock {
        display: flex;
        align-items: center;

        .duplicate {
          width: 30%;
          margin: 0;
          margin-left: 1rem;
          font-size: 15px;
          padding: 1rem;
          cursor: pointer;

          @media (max-width: 425px) {
            width: 40%;
          }
        }
      }
    }

    .makeDay {
      display: flex;
      justify-content: space-between;
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
const ErrorMessageBlock = styled.div`
  text-align: center;
  margin: 0.3rem 0;
  color: red;
  font-weight: bold;
`;

const PatientModifiy = ({
  duplicatePatient,
  onChange,
  form,
  onDuplicatePatient,
  onSubmit,
}) => {
  const [error, setError] = useState(null);

  const onCheckPasswordConfirm = (e) => {
    const { password, passwordConfirm } = form;

    if (password !== passwordConfirm) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <PatientModifiyBlock>
      <h1>회원 정보 수정</h1>
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
              onClick={onDuplicatePatient}
            >
              중복 확인
            </button>
          </div>
          {duplicatePatient === true && (
            <ErrorMessageBlock>아이디가 중복됩니다.</ErrorMessageBlock>
          )}
          {duplicatePatient === false && (
            <ErrorMessageBlock>사용가능한 아이디 입니다.</ErrorMessageBlock>
          )}
          <span>현재 비밀번호</span>
          <StyledInput
            type="password"
            name="oldPassword"
            value={form.oldPassword}
            placeholder="현재 비밀번호 입력"
            onChange={onChange}
          />
          <span>새로운 비밀번호</span>
          <StyledInput
            type="password"
            name="password"
            value={form.password}
            placeholder="새로운 비밀번호 입력"
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
          {error === false && (
            <ErrorMessageBlock>비밀번호가 일치하지 않습니다.</ErrorMessageBlock>
          )}

          <span>생년월일</span>
          <StyledInput
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={onChange}
          />

          {/* <span>D-Day</span>
          <div className="makeDay">
            <StyledInput
              type="text"
              name="dayText"
              value={form.dayText}
              style={{ width: '50%', marginRight: '1rem' }}
              placeholder="D-Day"
              onChange={onChange}
            />
            <StyledInput
              type="date"
              name="date"
              value={form.date}
              style={{ width: '50%' }}
              onChange={onChange}
            />
          </div> */}
          <button disabled={error === false}>회원 정보 수정</button>
        </form>
      </div>
    </PatientModifiyBlock>
  );
};

export default PatientModifiy;
