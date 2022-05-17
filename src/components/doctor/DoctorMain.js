import React, { useState } from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import DoctorRegisterPatContainer from '../../container/doctor/DoctorRegisterPatContainer';

const DoctorMainBlock = styled.div`
  width: 100%;
  padding: 3rem 10rem;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .patientIndi {
    width: 70%;
    padding: 0.5rem;
    border-bottom: 1px solid ${palette.blue[0]};
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    margin-bottom: 2.5rem;

    .patientInfo {
      width: 70%;
      display: flex;
      justify-content: space-between;
    }
    .buttonWrapper {
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

  .submitPatient {
    width: 70%;
    text-align: right;
    button {
      width: 200px;
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
    }
  }
`;

const DoctorMain = ({ patientList, onGetPatientDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onMovePatientList = (patient_Id) => {
    navigate(`/doctor/list/${patient_Id}`);
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    patientList && (
      <>
        {isOpen && <DoctorRegisterPatContainer onOpen={onOpen} />}
        <DoctorMainBlock>
          {patientList.content.map((p) => (
            <div className="patientIndi" key={p.code}>
              <div className="patientInfo">
                <span>이름 : {p.name}</span>
                <span>생년월일 : {p.birthDate}</span>
                <span>병동위치 : {p.hospitalRoom}</span>
                <span>입원날짜 : {p.hospitalizationDate}</span>
                <span>병명 : {p.diseaseName}</span>
              </div>
              <div className="buttonWrapper">
                <button>수정</button>
                <button onClick={() => onGetPatientDelete(p.code)}>삭제</button>
                <button onClick={() => onMovePatientList(p.code)}>LIST</button>
              </div>
            </div>
          ))}
          <div className="submitPatient">
            <button onClick={onOpen}>환자 등록</button>
          </div>
        </DoctorMainBlock>
      </>
    )
  );
};

export default DoctorMain;
