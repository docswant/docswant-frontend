import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import palette from '../../lib/styles/palette';

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

const PatientCheckAnswerBlock = styled.div`
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

  .closeBlock {
    width: 100%;
    text-align: right;
    cursor: pointer;
    svg {
      font-size: 25px;
    }
  }
`;

const AnswerBlock = styled.div`
  width: 500px;
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  animation: ${ModalFade} 0.5s;

  .titleBlock {
    h2 {
      margin: 0;
      margin-top: 0.5rem;
    }
    text-align: center;
    border-bottom: 2px solid ${palette.blue[0]};
    padding-bottom: 1rem;
  }

  .answerBlock {
    padding: 1rem;
  }
`;

const PatientCheckAnswer = ({ answerText, onAnswer }) => {
  return (
    <PatientCheckAnswerBlock>
      <AnswerBlock>
        <div className="closeBlock">
          <AiOutlineClose onClick={onAnswer} />
        </div>
        <div className="titleBlock">
          <h2>나의 답변</h2>
        </div>

        <div className="answerBlock">
          <span>{answerText}</span>
        </div>
      </AnswerBlock>
    </PatientCheckAnswerBlock>
  );
};

export default PatientCheckAnswer;
