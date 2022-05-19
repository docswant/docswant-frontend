import React, { useState } from 'react';
import styled from 'styled-components';
import PatientAnswerToDoctorContainer from '../../container/patient/PatientAnswerToDoctorContainer';
import palette from '../../lib/styles/palette';

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

const PatientSurvey = ({ questionList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  const onOpen = (id) => {
    setIsOpen(!isOpen);
    setQuestionId(id);
  };
  return (
    questionList && (
      <>
        {isOpen && (
          <PatientAnswerToDoctorContainer
            onOpen={onOpen}
            questionId={questionId}
          />
        )}
        <PatientSurveyBlock>
          {questionList.content.map((c) => (
            <div className="surveyList">
              <div className="surveyInfo">
                <span>김의사</span>
                <span>2022.05.07</span>
              </div>
              <div className="surveyCheck">
                <p>{c.content}</p>
                <div className="surveyButton">
                  <button onClick={() => onOpen(c.id)}>답변하기</button>
                  {/* <button>조금 아파요</button>
                <button>괜찮아요</button>
                <button>아주 괜찮아요</button> */}
                </div>
              </div>
            </div>
          ))}
          {/* <div className="submitArea">
          <button>설문 제출</button>
        </div> */}
        </PatientSurveyBlock>
      </>
    )
  );
};

export default PatientSurvey;
