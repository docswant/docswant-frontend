import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PatientSurveyBlock = styled.div`
  width: 100%;
  padding: 3rem 10rem;
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
          margin-left: 1rem;
          border: 1px solid ${palette.blue[0]};
          background-color: white;
          border-radius: 12px;
          padding: 0.3rem 0.5rem;
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
  return (
    questionList && (
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
                <button>많이 아파요</button>
                <button>조금 아파요</button>
                <button>괜찮아요</button>
                <button>아주 괜찮아요</button>
              </div>
            </div>
          </div>
        ))}
        <div className="submitArea">
          <button>설문 제출</button>
        </div>
      </PatientSurveyBlock>
    )
  );
};

export default PatientSurvey;
