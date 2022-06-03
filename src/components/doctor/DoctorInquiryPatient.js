import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import palette from '../../lib/styles/palette';
import { AiOutlineClose } from 'react-icons/ai';

const ModalFade = keyframes`
  from{
    opacity: 0;
    margin-top: -50px;
  }
  to{
    opacity: 1;
    margin-top: 0%;
  }
`;

const DoctorInquiryPatientBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .formBlock {
    width: 425px;
    background-color: white;
    border-radius: 12px;
    animation: ${ModalFade} 0.5s;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 425px) {
      width: 315px;
    }

    .closeBlock {
      width: 100%;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      padding: 0.6rem;
      border-bottom: 2px solid ${palette.blue[0]};
      svg {
        font-size: 25px;
      }

      #name {
        margin-left: 1rem;
        font-size: 2rem;
        color: ${palette.gray[1]};
      }
    }

    .detailBlock {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0.6rem 1rem;

      span {
        margin-top: 1rem;
      }
    }
  }
`;

const DoctorInquiryPatient = ({ onDetail, surgery, discharge, name }) => {
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed;
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);
  console.log(surgery, discharge);
  return (
    <DoctorInquiryPatientBlock>
      <div className="formBlock">
        <div className="closeBlock">
          <div id="name">{name}</div>
          <AiOutlineClose onClick={onDetail} />
        </div>
        <div className="detailBlock">
          {surgery ? (
            <span>수술날짜 : {surgery}</span>
          ) : (
            <span>예정된 수술 날짜가 없습니다.</span>
          )}
          {discharge ? (
            <span style={{ marginBottom: '1rem' }}>퇴원날짜 : {discharge}</span>
          ) : (
            <span style={{ marginBottom: '1rem' }}>
              예정된 퇴원날짜가 없습니다.
            </span>
          )}
        </div>
      </div>
    </DoctorInquiryPatientBlock>
  );
};

export default DoctorInquiryPatient;
