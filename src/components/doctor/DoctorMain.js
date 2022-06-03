import React, { useState } from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import DoctorRegisterPatContainer from '../../container/doctor/DoctorRegisterPatContainer';
import Pagination from '../common/PaginationPatientList';
import DoctorModifyPatientContainer from '../../container/doctor/DoctorModifyPatientContainer';
import DoctorInquiryPatient from './DoctorInquiryPatient';
import Loading from '../common/Loading';

const DoctorMainBlock = styled.div`
  width: 100%;
  padding: 3rem 0;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .patientIndi {
    width: 100%;
    padding: 0.5rem;
    border-bottom: 1px solid ${palette.blue[0]};
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    .patientInfo {
      width: 70%;
      display: flex;
      justify-content: space-between;
      cursor: pointer;

      @media (max-width: 912px) {
        width: 90%;
        margin-bottom: 1rem;
      }

      @media (max-width: 750px) {
        flex-direction: column;
        margin-bottom: 0;
        span {
          margin-bottom: 0.8rem;
        }
      }
    }
    .buttonWrapper {
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

        @media (max-width: 375px) {
          margin-left: 0.35rem;
        }
      }
      @media (max-width: 1024px) {
        margin-top: 1rem;
        text-align: right;
      }
    }
  }

  .submitPatient {
    width: 100%;
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
      &:hover {
        background-color: ${palette.blue[1]};
      }

      @media (max-width: 425px) {
        width: 100%;
      }
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

const DoctorMain = ({ patientList, onGetPatientDelete, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [surgery, setSurgery] = useState('');
  const [discharge, setDischarge] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState(null);
  const [patientObj, setPatientObj] = useState({});
  const { user_Id } = useParams();
  const navigate = useNavigate();

  const onMovePatientList = (patient_Id) => {
    navigate(`/doctor/list/1/${patient_Id}`);
  };

  const onMoveDoctorInquiry = (patient_Id) => {
    navigate(`/doctor/inquiry/1/${user_Id}/${patient_Id}`);
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const onUpdate = (code, obj) => {
    setIsUpdate(!isUpdate);
    setCode(code);
    setPatientObj(obj);
  };

  const onDetail = (surgery, discharge, name) => {
    setIsDetail(!isDetail);
    setSurgery(surgery);
    setDischarge(discharge);
    setName(name);
  };

  return loading === true ? (
    <Loading />
  ) : (
    patientList && (
      <>
        {isOpen && <DoctorRegisterPatContainer onOpen={onOpen} />}
        {isUpdate && (
          <DoctorModifyPatientContainer
            onUpdate={onUpdate}
            code={code}
            obj={patientObj}
          />
        )}
        {isDetail && (
          <DoctorInquiryPatient
            onDetail={onDetail}
            surgery={surgery}
            discharge={discharge}
            name={name}
          />
        )}
        <DoctorMainBlock>
          {patientList.content.length === 0 ? (
            <NoQuestionBlock>등록된 환자가 없습니다.</NoQuestionBlock>
          ) : (
            patientList.content.map((p) => (
              <div className="patientIndi" key={p.code}>
                <div
                  className="patientInfo"
                  onClick={() =>
                    onDetail(p.surgeryDate, p.dischargeDate, p.name)
                  }
                >
                  <div className="name">
                    <span>이름 : {p.name}</span>
                  </div>
                  <div className="birthDate">
                    <span>생년월일 : {p.birthDate}</span>
                  </div>
                  <div className="hospitalRoom">
                    <span>병동위치 : {p.hospitalRoom}</span>
                  </div>
                  <div className="hospitalizationDate">
                    <span>입원날짜 : {p.hospitalizationDate}</span>
                  </div>
                  <div className="diseaseName">
                    <span>병명 : {p.diseaseName}</span>
                  </div>
                </div>
                <div className="buttonWrapper">
                  <button onClick={() => onUpdate(p.code, p)}>수정</button>
                  <button onClick={() => onGetPatientDelete(p.code)}>
                    삭제
                  </button>
                  <button onClick={() => onMovePatientList(p.code)}>
                    LIST
                  </button>
                  <button onClick={() => onMoveDoctorInquiry(p.code)}>
                    문의사항
                  </button>
                </div>
              </div>
            ))
          )}
          <div className="submitPatient">
            <button onClick={onOpen}>환자 등록</button>
          </div>
          <Pagination patientList={patientList} />
        </DoctorMainBlock>
      </>
    )
  );
};

export default DoctorMain;
