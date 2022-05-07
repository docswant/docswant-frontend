import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PatientModifiyBlock = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  h2 {
    margin: 1rem;
    margin-bottom: 5rem;
  }
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
          width: 25%;
          margin: 0;
          margin-left: 1rem;
          font-size: 12px;
          padding: 1rem;
          cursor: pointer;
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

const PatientModifiy = () => {
  return (
    <PatientModifiyBlock>
      <h1>회원 정보 수정</h1>
      <div className="formBlock">
        <form>
          <span>아이디</span>
          <div className="duplicateBlock">
            <StyledInput
              type="text"
              name="username"
              placeholder="아이디 입력"
            />
            <button type="button" className="duplicate">
              중복 확인
            </button>
          </div>
          <span>현재 비밀번호</span>
          <StyledInput
            type="password"
            name="password"
            placeholder="현재 비밀번호 입력"
          />
          <span>새로운 비밀번호</span>
          <StyledInput
            type="password"
            name="password"
            placeholder="새로운 비밀번호 입력"
          />
          <span>비밀번호 확인</span>
          <StyledInput
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
          />

          <span>D-Day</span>
          <div className="makeDay">
            <StyledInput
              type="text"
              style={{ width: '50%', marginRight: '1rem' }}
              placeholder="D-Day"
            />
            <StyledInput type="date" style={{ width: '50%' }} />
          </div>
          <button>회원 정보 수정</button>
        </form>
      </div>
    </PatientModifiyBlock>
  );
};

export default PatientModifiy;
