import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const DoctorRegisterPatBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);

  .formBlock {
    width: 425px;
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;

    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .closeBlock {
      width: 100%;
      text-align: right;
      cursor: pointer;
      svg {
        font-size: 25px;
      }
    }

    h2 {
      text-align: center;
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

const DoctorRegisterPat = ({
  onOpen,
  registerP,
  onChangeField,
  onDuplicateDoctor,
  duplicateDoctor,
  onSubmit,
}) => {
  return (
    <DoctorRegisterPatBlock>
      <div className="formBlock">
        <div className="closeBlock" onClick={onOpen}>
          <AiOutlineClose />
        </div>
        <h2>환자 등록</h2>
        <form onSubmit={onSubmit}>
          <span>환자 코드</span>
          <div className="duplicateBlock">
            <StyledInput
              type="text"
              name="code"
              value={registerP.code}
              placeholder="환자코드를 입력해주세요"
              onChange={onChangeField}
            />
            <button
              type="button"
              className="duplicate"
              onClick={onDuplicateDoctor}
            >
              중복확인
            </button>
          </div>
          {duplicateDoctor === true && (
            <ErrorMessageBlock>아이디가 중복됩니다.</ErrorMessageBlock>
          )}
          {duplicateDoctor === false && (
            <ErrorMessageBlock>사용가능한 아이디 입니다.</ErrorMessageBlock>
          )}
          <span>환자 이름</span>
          <StyledInput
            type="text"
            name="name"
            value={registerP.name}
            onChange={onChangeField}
            placeholder="환자이름을 입력해주세요"
          />
          <span>생년월일</span>
          <StyledInput
            type="date"
            name="birthDate"
            value={registerP.birthDate}
            onChange={onChangeField}
          />
          <span>입원날짜</span>
          <StyledInput
            type="date"
            name="hospitalizationDate"
            value={registerP.hospitalizationDate}
            onChange={onChangeField}
          />
          <span>병명</span>
          <StyledInput
            type="text"
            name="diseaseName"
            value={registerP.diseaseName}
            placeholder="병명을 입력해주세요"
            onChange={onChangeField}
          />
          <span>병실위치</span>
          <StyledInput
            type="number"
            name="hospitalRoom"
            value={registerP.hospitalRoom}
            placeholder="병실위치를 입력해주세요"
            onChange={onChangeField}
          />
          <button>환자 등록</button>
        </form>
      </div>
    </DoctorRegisterPatBlock>
  );
};

export default DoctorRegisterPat;
