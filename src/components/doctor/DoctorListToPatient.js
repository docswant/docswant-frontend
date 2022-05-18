import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlineClose } from 'react-icons/ai';

const DoctorListToPatientBlock = styled.div`
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

    @media (max-width: 425px) {
      width: 315px;
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
    form {
      display: flex;
      flex-direction: column;

      #contentArea {
        height: 100px;
        border: 1px solid ${palette.blue[0]};
        outline: none;
      }

      button {
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
  }
`;

const DoctorListToPatient = ({
  onOpen,
  questionText,
  onChangeQuestion,
  onSubmit,
}) => {
  return (
    <DoctorListToPatientBlock>
      <div className="formBlock">
        <div className="closeBlock">
          <AiOutlineClose onClick={onOpen} />
        </div>
        <h2>질문 작성</h2>
        <form onSubmit={onSubmit}>
          <textarea
            id="contentArea"
            name="questionText"
            value={questionText}
            placeholder="내용을 입력해주세요"
            onChange={onChangeQuestion}
          />
          <button>작성하기</button>
        </form>
      </div>
    </DoctorListToPatientBlock>
  );
};

export default DoctorListToPatient;
