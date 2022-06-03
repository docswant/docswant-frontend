import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { useNavigate, useParams } from 'react-router-dom';

const PaginationInquiryDoctorBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  @media (max-width: 425px) {
    width: 70%;
  }

  button {
    outline: none;
    background-color: white;
    border: 1px solid ${palette.blue[0]};
    border-radius: 7px;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    font-weight: bold;
  }
`;

const PaginationInquiryDoctor = ({ inquiry }) => {
  const navigate = useNavigate();
  const { patient_Id, user_Id } = useParams();

  const onPrevPage = (page) => {
    navigate(`/doctor/inquiry/${page}/${user_Id}/${patient_Id}`);
    window.location.replace(`/doctor/inquiry/${page}/${user_Id}/${patient_Id}`);
  };
  const onNextPage = (page) => {
    navigate(`/doctor/inquiry/${page}/${user_Id}/${patient_Id}`);
    window.location.replace(`/doctor/inquiry/${page}/${user_Id}/${patient_Id}`);
  };
  return (
    <PaginationInquiryDoctorBlock>
      <button
        disabled={inquiry.page === 1}
        onClick={() => onPrevPage(inquiry.page - 1)}
      >
        이전
      </button>
      <span>{inquiry.page}</span>
      <button
        disabled={inquiry.hasNext === false}
        onClick={() => onNextPage(inquiry.page + 1)}
      >
        다음
      </button>
    </PaginationInquiryDoctorBlock>
  );
};

export default PaginationInquiryDoctor;
