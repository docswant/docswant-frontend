import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { FcSurvey } from 'react-icons/fc';
import { BiCommentCheck } from 'react-icons/bi';
import { BiCommentX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const PatientMypageBlock = styled.div`
  width: 100%;
  padding: 3rem 10rem;
  padding-bottom: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  .infoBlock {
    width: 40%;
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

      h2 {
        margin: 0;
        margin: 0.5rem 0;
      }

      .patientSubInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      }
    }

    button {
      background-color: white;
      outline: none;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 1px solid #dbdbdb;
      border-radius: 7px;
      padding: 0.5rem 1rem;
      font-weight: bold;
      cursor: pointer;
    }
    .subInfo {
      width: 100%;
      border-top: 1px solid #dbdbdb;
      padding: 1rem 3rem;
      display: flex;
      justify-content: space-between;

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

const PatientMypage = () => {
  const navigate = useNavigate();

  const onMoveModify = (userId) => {
    navigate(`/patient/modify/${userId}`);
  };
  return (
    <PatientMypageBlock>
      <div className="infoBlock">
        <div className="imgBlock"></div>
        <div className="patientInfo">
          <h2>정재욱</h2>
          <div className="patientSubInfo">
            <div style={{ marginRight: '0.3rem', marginBottom: '0.3rem' }}>
              26세
            </div>
            <div>퇴원까지 D-10</div>
          </div>
        </div>
        <button onClick={() => onMoveModify(999)}>설정</button>
        <div className="subInfo">
          <div className="totalRequest">
            <FcSurvey />
            <b>총 설문</b>
            <span>10</span>
          </div>
          <div className="answerRequest">
            <BiCommentCheck />
            <b>답변한 설문</b>
            <span>3</span>
          </div>
          <div className="noAnswerRequest">
            <BiCommentX />
            <b>미답변 설문</b>
            <span>7</span>
          </div>
        </div>
      </div>
    </PatientMypageBlock>
  );
};

export default PatientMypage;
