import React, { useState } from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import DoctorInquiryDetail from './DoctorInquiryDetail';

const DoctorInquiryBlock = styled.div`
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
  }

  .listButton {
    button {
      margin-right: 1rem;
      border: 1px solid ${palette.blue[0]};
      background-color: white;
      border-radius: 12px;
      padding: 0.3rem 0.9rem;
      cursor: pointer;
    }
  }
`;

const DoctorInquiry = ({ patientGet, onGetInquiryList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && (
        <DoctorInquiryDetail
          onOpen={onOpen}
          onGetInquiryList={onGetInquiryList}
        />
      )}
      {patientGet && (
        <DoctorInquiryBlock>
          <div className="listHeader">
            <span>이름 : {patientGet.name}</span>
            <span>병동위치 : {patientGet.hospitalRoom}</span>
            <div className="responsiveBlock">
              <span>입원날짜 : {patientGet.hospitalizationDate}</span>
              <span>병명 : {patientGet.diseaseName}</span>
            </div>
          </div>
          <div className="listInfo">
            <div className="listText">
              <span>제목</span>
            </div>
            <div className="listButton">
              <button onClick={onOpen}>상세보기</button>
            </div>
          </div>
        </DoctorInquiryBlock>
      )}
    </>
  );
};

export default DoctorInquiry;
