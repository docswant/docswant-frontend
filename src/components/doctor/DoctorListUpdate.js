import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlineClose } from 'react-icons/ai';

const ModalFade = keyframes`
  from{
    opacity: 0;
    margin-top: -50px;
  }
  to{
    opacity: 1;
    margin-top: 0%;
  }
`;
const DoctorListUpdateBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 3rem;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .formBlock {
    width: 425px;
    background-color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    animation: ${ModalFade} 0.5s;

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
        font-size: 16px;
        resize: none;

        &::placeholder {
          font-size: 16px;
        }
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
        &:hover{
          background-color: ${palette.blue[1]};
        }
      }
    }
  }
`;

const DoctorListUpdate = ({
  onUpdate,
  questionUpdateText,
  onChangeField,
  onSubmit,
}) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  return (
    <DoctorListUpdateBlock>
      <div className="formBlock">
        <div className="closeBlock">
          <AiOutlineClose onClick={onUpdate} />
        </div>
        <h2>질문 수정</h2>
        <form onSubmit={onSubmit}>
          <textarea
            id="contentArea"
            name="questionUpdateText"
            value={questionUpdateText}
            onChange={onChangeField}
          />
          <button>수정하기</button>
        </form>
      </div>
    </DoctorListUpdateBlock>
  );
};

export default DoctorListUpdate;
