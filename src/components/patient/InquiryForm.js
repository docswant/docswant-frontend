import React, {useState} from 'react'
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
    &:hover:not([disabled]){
      background-color: ${palette.blue[1]};
    }
  }
`

function InquiryForm() {
  const [text, setText] = useState('');

  const onChange = (e) =>{
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
    alert("제출 완료 되었습니다.");
  };

  return (
    <>
      <InquiryBlock>
        <p>문의사항을 적어주세요.</p>
        <textarea onChange={onChange} value={text} />
      </InquiryBlock>
      <BtnBlock>
        <Link to ="/inquiry_list">
          <button>목록 확인</button>
        </Link>
        <button disabled={!text} onClick={onReset}>제출</button>
      </BtnBlock>
    </>
  )
}

export default InquiryForm