import React, {useState} from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import InquiryForm from './InquiryForm';

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

function InquiryListForm({inquiries}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [textValue, setTextValue] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal=()=>{
    setModalOpen(false);
  };
  const onChange=(e)=>{
    setTextValue(e.target.value);
  }
  const onReset=()=>{
    alert("제출되었습니다.");
    console.log(textValue);
    setTextValue("");
  }

  return (
    <>
      <BtnBlock>
        <button onClick={openModal}>문의 하기</button>
      </BtnBlock>

      <InquiryForm
        open={modalOpen}
        close={closeModal}
        onChange={onChange}
        text={textValue}
        reset={onReset}/>

      <InquiryListBlock>
        <div className="box" style={{color: '#808893'}}>
          제출된 문의가 없습니다.
        </div>
      </InquiryListBlock>
    </>
  )
}

export default InquiryListForm