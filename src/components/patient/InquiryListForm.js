import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import InquiryForm from './InquiryForm';
import { Link } from 'react-router-dom';
import {MdDelete} from 'react-icons/md';


const ListMody = styled.div`
  display: flex;
  color:#dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover{
    color: #ff6b6b;
  }
  display: none;
`
const InquiryListBlock = styled.div`
  width: 100%;
  padding: 0 10rem;
  padding-bottom: 150px;
  align-items: center;
  .box{
    position: relative;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    border-bottom: 1px solid ${palette.blue[0]};
    padding: 0.5rem;
    color: black;
    &:hover{
      ${ListMody} {
        display: initial;
      }
    }
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
    <div className="box">
      <p>
        <span>제목 : {inquiry.title} _ {inquiry.id}</span>
      </p>
      <ListMody>
        <MdDelete />
      </ListMody>
    </div>
  );
}

function InquiryListForm() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    text: ''
  });
  const {title, text} = inputs;

  const [inquiries, setInquiries] = useState([
    {
      id: 1,
      title: '약 관련 문의',
      text: '첫번째 약 관련 문의'
    },
    {
      id: 2,
      title: '약 관련 문의',
      text: '두번째 약 관련 문의'
    },
    {
      id: 3,
      title: '약 관련 문의',
      text: '세번째 약 관련 문의'
    },
    {
      id: 4,
      title: '약 관련 문의',
      text: '네번째 약 관련 문의'
    },
    {
      id: 5,
      title: '약 관련 문의',
      text: '다섯번째 약 관련 문의'
    },
  ]);
  const nextId = useRef(6);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal=()=>{
    setModalOpen(false);
  };
  const onChange=(e)=>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }
  const onReset=()=>{
    alert("제출되었습니다.");

    const inquiry = {
      id: nextId.current,
      title: title,
      text: text
    };
    setInquiries([...inquiries, inquiry]);

    console.log(title);
    setInputs({
      title: '',
      text: ''
    });
    nextId.current += 1;
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
        text={text}
        reset={onReset}
        title={title}/>

      <InquiryListBlock>
        <Link to='/inquiry_modify'>
          {inquiries.map(inquiry => (
            <Inquiry inquiry = {inquiry} key={inquiry.id}/>
          ))}
        </Link>
      </InquiryListBlock>
    </>
  )
}

export default InquiryListForm