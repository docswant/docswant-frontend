import React from 'react'
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  button {
    outline: none;
    background-color: white;
    border: 1px solid ${palette.blue[0]};
    border-radius: 7px;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    font-weight: bold;
  }
`
const PaginationInquiryPatient = ({ inquiry }) => {
  const navigate = useNavigate();
  const { user_Id } = useParams();

  const onPrevPage = (page) => {
    navigate(`/patient/inquiry_list/${page}/${user_Id}`);
    window.location.replace(`/patient/inquiry_list/${page}/${user_Id}`);
  };
  const onNextPage = (page) => {
    navigate(`/patient/inquiry_list/${page}/${user_Id}`);
    window.location.replace(`/patient/inquiry_list/${page}/${user_Id}`);
  };

  return (
    <PaginationBlock>
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
    </PaginationBlock>
  )
}

export default PaginationInquiryPatient