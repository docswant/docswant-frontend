import React from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const InquiryListBlock = styled.div`
  background-color: ${palette.gray[2]};
  padding: 2rem 0 6rem;
  height: 70vh;
  text-align: center;
  margin: 0 auto;
  p{
    font-size: 30px;
  }
  .box{
    background-color: white;
    display: inline-block;
    width: 50%;
    height: 80%;
    margin-top: 10px;
    overflow-y: scroll;
    font-size: 18px;
    border: 1px solid black;
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
function Inquiry({inquiry}){
  return (
    <div>
      <b>{inquiry.id}</b> {inquiry.text}
    </div>
  );
}

function InquiryListForm({inquiries}) {
  return (
    <>
      <InquiryListBlock>
        <p>나의 문의함</p>
        <div class="box" style={{color: '#808893'}}>
          제출된 문의가 없습니다.
          {inquiries.map(inquiry => (
            <Link to="/inquiry_modify">
              <Inquiry inquiry={inquiry} key={inquiry.id} />
            </Link>
          ))}
        </div>
      </InquiryListBlock>
      <BtnBlock>
        <Link to ="/inquiry">
          <button>문의 하기</button>
        </Link>
        <Link to="/">
          <button>돌아 가기</button>
        </Link>
      </BtnBlock>
    </>
  )
}

export default InquiryListForm