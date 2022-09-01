import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import palette from '../../lib/styles/palette';
import Loading from '../common/Loading';

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

const DoctorCheckAnswerBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    padding: 1rem;
  }

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 425px) {
    width: 315px;
  }

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

const DoctorCheckAnswer = ({ onAnswer, checkAnswer, loading }) => {
  return loading === true ? (
    <Loading />
  ) : (
    checkAnswer && (
      <DoctorCheckAnswerBlock>
        <AnswerBlock>
          <div className="closeBlock">
            <AiOutlineClose onClick={onAnswer} />
          </div>
          <div className="titleBlock">
            <h2>{checkAnswer.content}</h2>
          </div>

          <div className="answerBlock">
            {checkAnswer.answerStatus === 'DONE' ? (
              <span>{checkAnswer.answer}</span>
            ) : (
              <span>답변이 없습니다.</span>
            )}
          </div>
        </AnswerBlock>
      </DoctorCheckAnswerBlock>
    )
  );
};

export default DoctorCheckAnswer;
