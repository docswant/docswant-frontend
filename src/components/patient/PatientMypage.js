import React, { useState, useEffect } from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { FcSurvey } from 'react-icons/fc';
import { BiCommentCheck } from 'react-icons/bi';
import { BiCommentX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import getCalculate from '../../lib/calculateYear';
import { useParams } from 'react-router-dom';

const PatientMypageBlock = styled.div`
  width: 100%;
  margin: 1rem auto;
  padding: 1rem 0;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding-bottom: 0;
  }
  .infoBlock {
    width: 414px;
    border: 1px solid ${palette.blue[0]};
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    .imgBlock {
      width: 100px;
      height: 100px;
      background-color: gray;
      border-radius: 50%;
    }
    .patientInfo {
      display: flex;
      flex-direction: column;
      align-items: center;

      .nameAge {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        h2 {
          margin: 0;
        }
      }

      .patientSubInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;

        div {
          margin-top: 0.3rem;
        }
      }
    }

    button {
      background-color: white;
      color: ${palette.gray[1]};
      outline: none;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 1px solid #dbdbdb;
      border-radius: 7px;
      padding: 0.5rem 1rem;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        color: black;
        border-color: black;
      }
    }
    .subInfo {
      width: 100%;
      border-top: 1px solid #dbdbdb;
      padding: 1rem 3rem;
      display: flex;
      justify-content: space-between;

      @media (max-width: 375px) {
        padding: 1rem;
      }

      .totalRequest,
      .answerRequest,
      .noAnswerRequest {
        display: flex;
        flex-direction: column;
        align-items: center;

        svg {
          width: 30px;
          height: 30px;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;

const PatientMypage = ({ patientGet, questionList }) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { user_Id } = useParams();

  let now = new Date();
  let Dday;
  let discharge;
  let result;
  let gap;

  if (patientGet) {
    if (patientGet.dischargeDate) {
      discharge = patientGet.dischargeDate;
      let year = discharge.substr(0, 4);
      let month = discharge.substr(5, 2);
      let day = discharge.substr(8, 2);
      Dday = new Date(year, month - 1, day);
      gap = now.getTime() - Dday.getTime();
      result = Math.floor(gap / 1000 / 60 / 60 / 24) * -1;
    }
  }

  const onMoveModify = () => {
    navigate(`/patient/modify/${user_Id}`);
  };

  useEffect(() => {
    if (questionList) {
      const answer = questionList.content.filter(
        (question) => question.answerStatus === 'DONE',
      );
      setCount(answer.length);
    }
  }, [questionList]);

  return (
    patientGet &&
    questionList && (
      <PatientMypageBlock>
        <div className="infoBlock">
          <div className="imgBlock"></div>
          <div className="patientInfo">
            <div className="nameAge">
              <h2 style={{ marginRight: '0.3rem' }}>
                {patientGet.patientName}
              </h2>
              <h2>{getCalculate(patientGet.birthDate.substr(0, 4))}세</h2>
            </div>
            <div className="patientSubInfo">
              {patientGet.dischargeDate ? (
                result < 0 ? (
                  <div>예정된 퇴원일자가 없습니다.</div>
                ) : (
                  <div>
                    퇴원까지 : D-{result} ({patientGet.dischargeDate})
                  </div>
                )
              ) : (
                <div>예정된 퇴원일자가 없습니다.</div>
              )}
              {patientGet.roundingTime ? (
                <div>오늘의 회진 일정 : {patientGet.roundingTime}</div>
              ) : (
                <div>예정된 회진이 없습니다.</div>
              )}
            </div>
          </div>
          <button onClick={onMoveModify}>설정</button>
          <div className="subInfo">
            <div className="totalRequest">
              <FcSurvey />
              <b>총 설문</b>
              <span>{questionList.content.length}</span>
            </div>
            <div className="answerRequest">
              <BiCommentCheck />
              <b>답변한 설문</b>
              <span>{count}</span>
            </div>
            <div className="noAnswerRequest">
              <BiCommentX />
              <b>미답변 설문</b>
              <span>{questionList.content.length - count}</span>
            </div>
          </div>
        </div>
      </PatientMypageBlock>
    )
  );
};

export default PatientMypage;
