import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineQuestionAnswer } from 'react-icons/md';
import DoctorListToPatientContainer from '../../container/doctor/DoctorListToPatientContainer';
import DoctorListUpdateContainer from '../../container/doctor/DoctorListUpdateContainer';
import getCalculate from '../../lib/calculateYear';
import Loading from '../common/Loading';
import DoctorCheckAnswer from './DoctorCheckAnswer';
import PaginationQuestionList from '../common/PaginationQuestionList';

const DoctorListBlock = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  padding-bottom: 150px;
  position: relative;

  .listHeader {
    margin-bottom: 3rem;
    display: flex;
    @media (max-width: 626px) {
      display: block;
      .responsiveBlock {
        margin-top: 1rem;
      }
    }
    span {
      margin-right: 2rem;
      font-size: 25px;

      @media (max-width: 768px) {
        font-size: 20px;
        margin-right: 1rem;
      }

      @media (max-width: 425px) {
        font-size: 16px;
      }
    }
  }
  .listInfo {
    width: 80%;
    border-bottom: 1px solid ${palette.blue[0]};
    display: flex;
    font-size: 20px;
    margin-bottom: 2.5rem;
    padding: 0.5rem;

    .listText {
      width: 70%;
      text-align: center;
      flex: 1;
      cursor: pointer;
    }
    .listButton {
      display: flex;
      align-items: center;

      button {
        margin-left: 1rem;
        border: 1px solid ${palette.blue[0]};
        background-color: white;
        border-radius: 12px;
        padding: 0.3rem 0.9rem;
        cursor: pointer;
        &:hover {
          border-color: ${palette.blue[1]};
        }
      }
    }
  }
  .patientListPlus {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${palette.blue[0]};

    svg {
      color: black;
      font-weight: bold;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;

const NoQuestionBlock = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  color: ${palette.blue[0]};
`;

const DoctorList = ({
  patientGet,
  questionList,
  onGetDeleteQuestion,
  loading,
  onAnswerCheck,
  checkAnswer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);
  const [content, setContent] = useState('');
  const [questionId, setQuestionId] = useState(null);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const onAnswer = () => {
    setIsAnswer(!isAnswer);
  };

  const onUpdate = (content, id, answer) => {
    if (answer === 'DONE') {
      alert('답변이 있는 설문은 수정이 불가능합니다.\n삭제 후 재등록 해주세요');
    } else {
      setIsUpdate(!isUpdate);
      setContent(content);
      setQuestionId(id);
    }
  };
  return loading === true ? (
    <Loading />
  ) : (
    patientGet && questionList && (
      <>
        {isOpen && <DoctorListToPatientContainer onOpen={onOpen} />}
        {isUpdate && (
          <DoctorListUpdateContainer
            onUpdate={onUpdate}
            content={content}
            questionId={questionId}
          />
        )}
        {isAnswer && (
          <DoctorCheckAnswer
            onAnswer={onAnswer}
            checkAnswer={checkAnswer}
            loading={loading}
          />
        )}
        <DoctorListBlock>
          <div className="listHeader">
            <span>
              {patientGet.name} :
              {getCalculate(patientGet.birthDate.substr(0, 4))}세
            </span>
            <span>병동위치 : {patientGet.hospitalRoom}</span>
            <div className="responsiveBlock">
              <span>입원날짜 : {patientGet.hospitalizationDate}</span>
              <span>병명 : {patientGet.diseaseName}</span>
            </div>
          </div>
          {questionList.content.length !== 0 ? (
            <>
              {questionList.content.map((c) => (
                <div className="listInfo" key={c.id}>
                  <div className="listText">
                    <span>{c.content}</span>
                  </div>
                  <div className="listButton">
                    {c.answerStatus === 'DONE' && (
                      <MdOutlineQuestionAnswer
                        cursor="pointer"
                        width={25}
                        onClick={() => {
                          onAnswer();
                          onAnswerCheck(c.id);
                        }}
                      />
                    )}
                    <button
                      onClick={() => onUpdate(c.content, c.id, c.answerStatus)}
                    >
                      수정
                    </button>
                    <button onClick={() => onGetDeleteQuestion(c.id)}>
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <NoQuestionBlock>
              <span>등록된 설문이 없습니다.</span>
            </NoQuestionBlock>
          )}
          <div className="patientListPlus">
            <AiOutlinePlus onClick={onOpen} />
          </div>
          <PaginationQuestionList questionList={questionList} />
        </DoctorListBlock>
      </>
    )
  );
};

export default DoctorList;
