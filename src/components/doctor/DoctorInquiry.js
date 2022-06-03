import React, { useState } from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import DoctorInquiryDetail from './DoctorInquiryDetail';
import PaginationInquiryDoctor from '../common/PaginationInquiryDoctor';
import Loading from '../common/Loading';

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
      &:hover {
        border-color: ${palette.blue[1]};
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

const DoctorInquiry = ({
  patientGet,
  inquiry,
  onGetConfirmInquiry,
  loading,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmTitle, setConfirmTitle] = useState('');
  const [confirmContent, setConfirmContent] = useState('');

  const onOpen = (title, content) => {
    setIsOpen(!isOpen);
    setConfirmTitle(title);
    setConfirmContent(content);
  };
  return loading === true ? (
    <Loading />
  ) : (
    <>
      {isOpen && (
        <DoctorInquiryDetail
          onOpen={onOpen}
          confirmTitle={confirmTitle}
          confirmContent={confirmContent}
        />
      )}
      {patientGet && inquiry && (
        <DoctorInquiryBlock>
          <div className="listHeader">
            <span>이름 : {patientGet.name}</span>
            <span>병동위치 : {patientGet.hospitalRoom}</span>
            <div className="responsiveBlock">
              <span>입원날짜 : {patientGet.hospitalizationDate}</span>
              <span>병명 : {patientGet.diseaseName}</span>
            </div>
          </div>
          {inquiry.content.length === 0 ? (
            <NoQuestionBlock>등록된 문의사항이 없습니다</NoQuestionBlock>
          ) : (
            inquiry.content.map((i) => (
              <div className="listInfo" key={i.id}>
                <div className="listText">
                  <span>{i.title}</span>
                </div>
                <div className="listButton">
                  <button
                    onClick={() => {
                      onOpen(i.title, i.content);
                      onGetConfirmInquiry(i.id);
                    }}
                  >
                    상세보기
                  </button>
                </div>
              </div>
            ))
          )}
          <PaginationInquiryDoctor inquiry={inquiry} />
        </DoctorInquiryBlock>
      )}
    </>
  );
};

export default DoctorInquiry;
