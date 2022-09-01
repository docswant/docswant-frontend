import React from 'react';
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
const DoctorInquiryDetailBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    padding: 1rem;
  }

  .closeBlock {
    width: 100%;
    text-align: right;
    cursor: pointer;
    svg {
      font-size: 25px;
    }
  }
`;

const InquiryBlock = styled.div`
  width: 500px;
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  animation: ${ModalFade} 0.5s;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 425px) {
    width: 315px;
  }

  .titleBlock {
    h2 {
      margin: 0;
      margin-top: 0.5rem;
    }
    text-align: center;
    border-bottom: 2px solid ${palette.blue[0]};
    padding-bottom: 1rem;
  }

  .answerBlock {
    padding: 2rem 1rem;
  }

  button {
    width: 100%;
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
  }
`;

const DoctorInquiryDetail = ({
  onOpen,
  onGetInquiryList,
  confirmTitle,
  confirmContent,
}) => {
  return (
    <DoctorInquiryDetailBlock>
      <InquiryBlock>
        <div className="closeBlock">
          <AiOutlineClose onClick={onOpen} />
        </div>
        <div className="titleBlock">
          <h2>{confirmTitle}</h2>
        </div>
        <div className="answerBlock">
          <span>{confirmContent}</span>
        </div>
        <button onClick={onOpen}>확인</button>
      </InquiryBlock>
    </DoctorInquiryDetailBlock>
  );
};

export default DoctorInquiryDetail;
