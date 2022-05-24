import React from 'react';
import palette from '../../lib/styles/palette';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

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

const PaginationQuestionList = ({ questionList }) => {
  const navigate = useNavigate();
  const { patient_Id } = useParams();

  const onPrevPage = (page) => {
    navigate(`/doctor/list/${page}/${patient_Id}`);
    window.location.replace(`/doctor/list/${page}/${patient_Id}`);
  };
  const onNextPage = (page) => {
    navigate(`/doctor/list/${page}/${patient_Id}`);
    window.location.replace(`/doctor/list/${page}/${patient_Id}`);
  };
  return (
    <PaginationBlock>
      <button
        disabled={questionList.page === 1}
        onClick={() => onPrevPage(questionList.page - 1)}
      >
        이전
      </button>
      <span>{questionList.page}</span>
      <button
        disabled={questionList.hasNext === false}
        onClick={() => onNextPage(questionList.page + 1)}
      >
        다음
      </button>
    </PaginationBlock>
  );
};

export default PaginationQuestionList;
