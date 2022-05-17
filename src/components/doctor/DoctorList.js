import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlinePlus } from 'react-icons/ai';
import DoctorListToPatientContainer from '../../container/doctor/DoctorListToPatientContainer';

const DoctorListBlock = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  padding-bottom: 150px;
  position: relative;

  .listHeader {
    margin-bottom: 3rem;
    span {
      margin-right: 2rem;
      font-size: 25px;
    }
  }
  .listInfo {
    width: 50%;
    border-bottom: 1px solid ${palette.blue[0]};
    display: flex;
    font-size: 20px;
    margin-bottom: 2.5rem;
    padding: 0.5rem;

    .listText {
      width: 80%;
      text-align: center;
    }
    .listButton {
      button {
        margin-left: 1rem;
        border: 1px solid ${palette.blue[0]};
        background-color: white;
        border-radius: 12px;
        padding: 0.3rem 0.9rem;
        cursor: pointer;
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

const DoctorList = ({ patientGet, questionList, onGetDeleteQuestion }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    patientGet &&
    questionList && (
      <>
        {isOpen && <DoctorListToPatientContainer onOpen={onOpen} />}
        <DoctorListBlock>
          <div className="listHeader">
            <span>{patientGet.name} : 25세</span>
            <span>병동위치 : {patientGet.hospitalRoom}</span>
            <span>입원날짜 : {patientGet.hospitalizationDate}</span>
            <span>병명 : {patientGet.diseaseName}</span>
          </div>
          {questionList.content.length !== 0 ? (
            <>
              {questionList.content.map((c) => (
                <div className="listInfo" key={c.id}>
                  <div className="listText">
                    <span>{c.content}</span>
                  </div>
                  <div className="listButton">
                    <button>수정</button>
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
        </DoctorListBlock>
      </>
    )
  );
};

export default DoctorList;
