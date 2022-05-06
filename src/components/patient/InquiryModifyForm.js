import React from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const InquiryModifyBlock = styled.div`
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

function InquiryModifyForm() {
  return (
    <>
      <InquiryModifyBlock>
        <p>나의 문의함</p>
        <textarea readOnly />
      </InquiryModifyBlock>
      <BtnBlock>
        <Link to ="/inquiry_list">
          <button>돌아 가기</button>
        </Link>
       
        <button>수정</button>
        <button>삭제</button>
      </BtnBlock>
    </>
  )
}

export default InquiryModifyForm