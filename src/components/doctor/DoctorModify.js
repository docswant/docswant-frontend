import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';

const DoctorModifyBlock = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  padding-bottom: 150px;

  @media (max-width: 425px) {
    padding: 0 1rem;
    padding-bottom: 150px;
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

const DoctorModify = () => {
  return (
    <DoctorModifyBlock>
      <h1>의사 정보 수정</h1>
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
          <button>정보 수정</button>
        </form>
      </div>
    </DoctorModifyBlock>
  );
};

export default DoctorModify;