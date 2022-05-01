import React from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const InquiryBlock = styled.div`
  background-color: ${palette.gray[2]};
  padding: 2rem 0 6rem;
  height: 70vh;
  text-align: center;
  margin: 0 auto;
  p{
    font-size: 30px;
  }
  textarea{
    width: 50%;
    height: 80%;
    resize: none;
    margin-top: 10px;
    overflow-y: scroll;
    font-size: 18px;
  }
`
const BtnBlock = styled.div`
  background-color: ${palette.gray[2]};
  text-align: right;
  padding-right: 10rem;
  height: 6rem;
  button{
    width: 10rem;
    height: 50%;
    margin-right: 10px;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    background-color: ${palette.blue[0]};
    &:hover{
      background-color: ${palette.blue[1]};
    }
  }
`

function InquiryForm() {
  return (
    <>
      <InquiryBlock>
        <p>문의사항을 적어주세요.</p>
        <textarea />
      </InquiryBlock>
      <BtnBlock>
        <Link to ="/">
          <button>목록 확인</button>
        </Link>
        <Link to="/">
          <button>제출</button>
        </Link>
      </BtnBlock>
    </>
  )
}

export default InquiryForm