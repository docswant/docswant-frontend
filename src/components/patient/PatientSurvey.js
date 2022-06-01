import React, { useState } from 'react';
import styled from 'styled-components';
import PatientAnswerToDoctorContainer from '../../container/patient/PatientAnswerToDoctorContainer';
import palette from '../../lib/styles/palette';
import Loading from '../common/Loading';
import PaginationPatientQuestion from '../common/PaginationPatientQuestion';
import PatientCheckAnswer from './PatientCheckAnswer';

const PatientSurveyBlock = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 1rem 0;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .surveyList {
    width: 80%;
    border-bottom: 1px solid ${palette.blue[0]};
    padding: 0.5rem;
    margin-bottom: 1rem;

    .surveyInfo {
      span {
        margin-right: 0.5rem;
        color: #999999;
      }

      #finish {
        color: ${palette.blue[0]};
        font-weight: bold;
        cursor: pointer;
        &:hover {
          color: ${palette.blue[1]};
        }
      }
    }
    .surveyCheck {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .surveyButton {
        button {
          border: 1px solid ${palette.blue[0]};
          background-color: white;
          border-radius: 12px;
          padding: 0.5rem 1.5rem;
          cursor: pointer;

          &:hover {
            background-color: ${palette.blue[0]};
            color: white;
          }
        }
      }
    }
  }

  .submitArea {
    width: 80%;
    text-align: right;

    button {
      outline: none;
      background-color: ${palette.blue[0]};
      border: none;
      padding: 1rem 3rem;
      border-radius: 7px;
      font-size: 20px;
      font-weight: bold;
      margin-top: 1rem;
      color: white;
      cursor: pointer;
    }
  }
`;

const PatientSurvey = ({ questionList, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  const [answerText, setAnswerText] = useState('');
  const onOpen = (id) => {
    setIsOpen(!isOpen);
    setQuestionId(id);
  };
  const onAnswer = (text) => {
    setIsOpenAnswer(!isOpenAnswer);
    setAnswerText(text);
  };

  let patientObj = JSON.parse(localStorage.getItem('patient'));

  return loading === true ? (
    <Loading />
  ) : (
    questionList && (
      <>
        {isOpen && (
          <PatientAnswerToDoctorContainer
            onOpen={onOpen}
            questionId={questionId}
          />
        )}
        {isOpenAnswer && (
          <PatientCheckAnswer onAnswer={onAnswer} answerText={answerText} />
        )}
        <PatientSurveyBlock>
          {questionList.content.length === 0 ? (
            <span>등록된 설문이 없습니다.</span>
          ) : (
            questionList.content.map((c) => (
              <div className="surveyList" key={c.id}>
                <div className="surveyInfo">
                  <span>{patientObj.doctorName}</span>
                  <span>{c.createdAt}</span>
                  {c.answerStatus === 'DONE' && (
                    <span id="finish" onClick={() => onAnswer(c.answer)}>
                      답변완료
                    </span>
                  )}
                </div>
                <div className="surveyCheck">
                  <p>{c.content}</p>
                  <div className="surveyButton">
                    <button onClick={() => onOpen(c.id)}>답변하기</button>
                  </div>
                </div>
              </div>
            ))
          )}
          <PaginationPatientQuestion questionList={questionList} />
        </PatientSurveyBlock>
      </>
    )
  );
};

export default PatientSurvey;
