import React from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const InquiryListBlock = styled.div`
  height: 50vh;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  .box{
    display: inline-block;
    width: auto;
    height: auto;
    font-size: 18px;
    border: none;
  }
`
const BtnBlock = styled.div`
  text-align: right;
  padding: 1rem 10rem;
  button{
    width: 10rem;
    height: 3rem;
    margin-right: 10px;
    border: none;
    color: white;
    font-size: 20px;
    border-radius: 7px;
    font-weight: 600;
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
      <BtnBlock>
        <Link to ="/inquiry">
          <button>문의 하기</button>
        </Link>
      </BtnBlock>
      <InquiryListBlock>
        <div className="box" style={{color: '#808893'}}>
          제출된 문의가 없습니다.
          {inquiries.map(inquiry => (
            <Link to="/inquiry_modify">
              <Inquiry inquiry={inquiry} key={inquiry.id} />
            </Link>
          ))}
        </div>
      </InquiryListBlock>
    </>
  )
}

export default InquiryListForm